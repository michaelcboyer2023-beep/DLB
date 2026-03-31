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

This copies `commissioning-report.html` → `index.html`, commits if the file changed, then `git push origin main`.

## Manual push (any file)

```bash
cd DLB
git add -A && git commit -m "Update site"
git push
```
