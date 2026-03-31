# DLB Workspace

Static web app: workspace hub, calendar, and **Daily Commissioning Report (DCR)**.

## GitHub Pages (live preview)

1. On GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **`/ (root)`**, then Save.
4. After a minute, the site will be at:

   `https://michaelcboyer2023-beep.github.io/DLB/`

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/` (serve from this folder so paths work).

## Publish live (GitHub Pages)

After editing `../commissioning-report.html`, sync and push in one step:

```bash
cd DLB
./publish-live.sh
```

Optional custom commit message: `./publish-live.sh "Fix hub header"`.

This copies `commissioning-report.html` → `index.html`, copies `../az21-cx-schedule.js` (Hybrid Cx calendar data for the hub) when present, commits if anything changed, then `git push origin main`.

To refresh schedule data after updating `AZ21 Hybrid Cx Schedule.xlsx`, regenerate the JS from your machine (same folder as the workbook is fine):

```bash
python3 /path/to/export_az21_schedule.py   # or re-run the export snippet used in your tooling
```

…and save the output as `../az21-cx-schedule.js` next to `commissioning-report.html`, then run `./publish-live.sh` again.

## Manual push (any file)

```bash
cd DLB
git add -A && git commit -m "Update site"
git push
```
