#!/usr/bin/env bash
# Copy parent commissioning-report.html → index.html, commit if needed, push to GitHub (live Pages).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
SRC="$(cd "$ROOT/.." && pwd)/commissioning-report.html"
if [[ ! -f "$SRC" ]]; then
  echo "error: missing source: $SRC" >&2
  exit 1
fi
cp "$SRC" "$ROOT/index.html"
cd "$ROOT"
git add index.html
if git diff --staged --quiet; then
  echo "index.html unchanged (already matches commissioning-report.html)"
else
  MSG="${1:-Publish site $(date -u +'%Y-%m-%d %H:%M UTC')}"
  git commit -m "$MSG"
fi
git push origin main
echo "Pushed to GitHub. Pages will update shortly if enabled on main / (root)."
