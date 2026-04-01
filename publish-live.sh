#!/usr/bin/env bash
# Copy parent commissioning-report.html → index.html, commit if needed, push to GitHub (live Pages).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
PARENT="$(cd "$ROOT/.." && pwd)"
SRC="$PARENT/commissioning-report.html"
JS_SRC="$PARENT/az21-cx-schedule.js"
LABOR_SRC="$PARENT/az21-labor-schedule.js"
if [[ ! -f "$SRC" ]]; then
  echo "error: missing source: $SRC" >&2
  exit 1
fi
cp "$SRC" "$ROOT/index.html"
if [[ -f "$JS_SRC" ]]; then
  cp "$JS_SRC" "$ROOT/az21-cx-schedule.js"
else
  echo "warn: optional schedule data not found: $JS_SRC (hub schedule panel will be empty)" >&2
fi
if [[ -f "$LABOR_SRC" ]]; then
  cp "$LABOR_SRC" "$ROOT/az21-labor-schedule.js"
else
  echo "warn: optional labor schedule not found: $LABOR_SRC (hub uses Hybrid Cx fallback only)" >&2
fi
cd "$ROOT"
git add index.html
[[ -f "$ROOT/az21-cx-schedule.js" ]] && git add az21-cx-schedule.js
[[ -f "$ROOT/az21-labor-schedule.js" ]] && git add az21-labor-schedule.js
if git diff --staged --quiet; then
  echo "no staged changes (index.html / schedule JS already match source)"
else
  MSG="${1:-Publish site $(date -u +'%Y-%m-%d %H:%M UTC')}"
  git commit -m "$MSG"
fi
git push origin main
echo "Pushed to GitHub. Pages will update shortly if enabled on main / (root)."
