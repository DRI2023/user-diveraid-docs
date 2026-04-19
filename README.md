# DiveRaid Docs (user-diveraid-docs)

Static, multilingual user guide for `user.diveraid.com` (EN is the source of truth; other languages are translations).

## Local setup

```bash
cd /Users/GMI/IdeaProjects/user-diveraid-docs
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Then open the URL printed by MkDocs (usually `http://127.0.0.1:8000/`).

## Build

```bash
mkdocs build
```

## Notes

- This repository is intentionally separate from the Laravel app repo to keep the application codebase clean.
- Docs are written starting from the Diver area. Next: Professional, Dive Center, Distributor.

## Screenshots (optional)

Screenshots live in `docs/assets/screenshots/...` and are referenced from pages. For now, pages should reference only the English screenshots under `docs/assets/screenshots/diver/en/...`.

To generate them automatically (requires Node + Playwright and a locally running Laravel app):

```bash
cd /Users/GMI/IdeaProjects/user-diveraid-docs
npm i
npx playwright install

# Start Laravel separately, example:
#   cd /path/to/user.diveraid.com && php artisan serve --port=8001

# Create login storage (recommended):
npx playwright codegen --save-storage=playwright.auth.json http://127.0.0.1:8001

# Capture
DIVER_AID_BASE_URL=http://127.0.0.1:8001 PLAYWRIGHT_STORAGE_STATE=playwright.auth.json npm run shots
```
