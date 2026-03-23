import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { chromium } from "playwright";

/**
 * Capture product screenshots and save them into the MkDocs assets folder.
 *
 * Usage:
 *   1) Start Laravel locally (example): php artisan serve --port=8001
 *   2) Create a Playwright storage state after login (recommended):
 *        npx playwright codegen --save-storage=playwright.auth.json http://127.0.0.1:8001
 *   3) Run:
 *        DIVER_AID_BASE_URL=http://127.0.0.1:8001 PLAYWRIGHT_STORAGE_STATE=playwright.auth.json npm run shots
 *
 * Notes:
 * - Diver pages require auth; without storage state, most pages will redirect to login.
 * - The script does not modify the Laravel repo. It only reads pages via HTTP and writes images to this docs repo.
 */

const repoRoot = path.resolve(process.cwd());
const docsRoot = path.join(repoRoot, "docs");
const outRoot = path.join(docsRoot, "assets", "screenshots", "diver");

const baseUrl = (process.env.DIVER_AID_BASE_URL || "http://127.0.0.1:8001").replace(/\/+$/, "");
const storageStatePath = process.env.PLAYWRIGHT_STORAGE_STATE;

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function outPath(locale, filename) {
  return path.join(outRoot, locale, filename);
}

// Diver docs set. Extend later (professional/dive-center/distributor).
const targets = [
  { key: "dashboard", file: "dashboard.png", pathByLocale: (l) => `/${l}/diver/dashboard` },
  { key: "library", file: "library.png", pathByLocale: (l) => `/${l}/diver/library` },

  { key: "documents-personal", file: "documents-personal.png", pathByLocale: (l) => `/${l}/diver/my-documents` },
  { key: "documents-uploaded", file: "documents-uploaded.png", pathByLocale: (l) => `/${l}/diver/documents` },

  { key: "courses-list", file: "courses-list.png", pathByLocale: (l) => `/${l}/diver/courses` },
  { key: "courses-expired", file: "courses-expired.png", pathByLocale: (l) => `/${l}/diver/courses/expired` },

  { key: "free-learnings-list", file: "free-learnings-list.png", pathByLocale: (l) => `/${l}/diver/free-learnings` },
  { key: "free-learnings-enroll", file: "free-learnings-enroll.png", pathByLocale: (l) => `/${l}/diver/free-learnings/enroll` },

  { key: "certifications", file: "certifications.png", pathByLocale: (l) => `/${l}/diver/certifications` },
  { key: "awards", file: "awards.png", pathByLocale: (l) => `/${l}/diver/awards` },

  { key: "dive-logs", file: "dive-logs.png", pathByLocale: (l) => `/${l}/diver/dive_log` },

  { key: "store", file: "store.png", pathByLocale: (l) => `/${l}/diver/store` },
  { key: "forms", file: "forms.png", pathByLocale: (l) => `/${l}/diver/forms/` }
];

const locales = ["it", "en"];

const browser = await chromium.launch({ headless: true });
try {
  const context = await browser.newContext(
    storageStatePath ? { storageState: storageStatePath } : {}
  );
  const page = await context.newPage();
  page.setDefaultTimeout(60_000);

  for (const locale of locales) {
    ensureDir(path.join(outRoot, locale));
    for (const t of targets) {
      const url = baseUrl + t.pathByLocale(locale);
      const dest = outPath(locale, t.file);

      await page.setViewportSize({ width: 1440, height: 900 });
      try {
        // `networkidle` is fragile with Livewire/polling. Use `load` and a small settle delay.
        await page.goto(url, { waitUntil: "load", timeout: 60_000 });
        await page.waitForTimeout(800);
        await page.screenshot({ path: dest, fullPage: true });
        // eslint-disable-next-line no-console
        console.log(`[${locale}] ${t.key}: ${dest}`);
      } catch (err) {
        // Still try to capture what is on screen (often a redirect or an error page),
        // and keep going so we get as many screenshots as possible in one run.
        try {
          await page.screenshot({ path: dest, fullPage: true });
          // eslint-disable-next-line no-console
          console.log(`[${locale}] ${t.key} (error, captured anyway): ${dest}`);
        } catch {
          // eslint-disable-next-line no-console
          console.log(`[${locale}] ${t.key} (error, could not screenshot): ${String(err)}`);
        }
      }
    }
  }

  if (storageStatePath) {
    // Keep storage state fresh if the app rotates tokens.
    await context.storageState({ path: storageStatePath });
  }
} finally {
  await browser.close();
}
