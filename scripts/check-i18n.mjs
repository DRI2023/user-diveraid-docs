import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const docsDir = path.join(repoRoot, "docs");
const mkdocsYmlPath = path.join(repoRoot, "mkdocs.yml");

function die(msg) {
  console.error(msg);
  process.exit(1);
}

function listMdFilesRecursive(dirAbs) {
  /** @type {string[]} */
  const out = [];

  /** @param {string} cur */
  function walk(cur) {
    const entries = fs.readdirSync(cur, { withFileTypes: true });
    for (const ent of entries) {
      if (ent.isDirectory() && (ent.name === ".git" || ent.name === "node_modules")) continue;
      const abs = path.join(cur, ent.name);
      if (ent.isDirectory()) {
        walk(abs);
        continue;
      }
      if (!ent.isFile()) continue;
      if (!ent.name.endsWith(".md")) continue;
      out.push(abs);
    }
  }

  walk(dirAbs);
  return out;
}

function parseLocalesFromMkdocsYml(mkdocsYmlText) {
  // Minimal parsing: find lines like `- locale: en`
  const locales = [];
  for (const line of mkdocsYmlText.split(/\r?\n/)) {
    const m = line.match(/^\s*-\s*locale:\s*([a-z]{2})(\s*#.*)?$/i);
    if (m) locales.push(m[1]);
  }
  return locales;
}

if (!fs.existsSync(mkdocsYmlPath)) die(`Missing mkdocs.yml at ${mkdocsYmlPath}`);
if (!fs.existsSync(docsDir)) die(`Missing docs dir at ${docsDir}`);

const mkdocsYmlText = fs.readFileSync(mkdocsYmlPath, "utf8");
const locales = parseLocalesFromMkdocsYml(mkdocsYmlText);
if (locales.length === 0) die("No locales found in mkdocs.yml (expected `- locale: xx`).");

const defaultLocale = "en";
if (!locales.includes(defaultLocale)) {
  die(`Expected ${defaultLocale} locale to exist in mkdocs.yml. Found: ${locales.join(", ")}`);
}

const sourceDir = path.join(docsDir, defaultLocale);
if (!fs.existsSync(sourceDir)) die(`Missing source locale dir: ${sourceDir}`);

const sourceMdAbs = listMdFilesRecursive(sourceDir);
const sourceRel = sourceMdAbs
  .map((abs) => path.relative(sourceDir, abs))
  .map((p) => p.split(path.sep).join("/"))
  .sort();

/** @type {{ locale: string, missing: string[] }[]} */
const missingByLocale = [];

for (const locale of locales) {
  if (locale === defaultLocale) continue;
  const localeDir = path.join(docsDir, locale);
  if (!fs.existsSync(localeDir)) {
    missingByLocale.push({ locale, missing: [...sourceRel] });
    continue;
  }
  const missing = [];
  for (const rel of sourceRel) {
    const candidate = path.join(localeDir, rel.split("/").join(path.sep));
    if (!fs.existsSync(candidate)) missing.push(rel);
  }
  if (missing.length) missingByLocale.push({ locale, missing });
}

if (missingByLocale.length === 0) {
  console.log(`OK: all locales contain all ${sourceRel.length} EN markdown files.`);
  process.exit(0);
}

console.error("Missing translations detected:");
for (const entry of missingByLocale) {
  console.error(`- ${entry.locale}: ${entry.missing.length} missing`);
  for (const rel of entry.missing) console.error(`  - ${rel}`);
}
process.exit(2);

