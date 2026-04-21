# /// script
# requires-python = ">=3.11"
# dependencies = ["playwright"]
# ///

import sys
import os
from pathlib import Path
from playwright.sync_api import sync_playwright

project_root = Path(__file__).parent
out_dir = project_root / "temporary screenshots"
out_dir.mkdir(exist_ok=True)

url = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000"
label = f"-{sys.argv[2]}" if len(sys.argv) > 2 else ""

n = 1
while (out_dir / f"screenshot-{n}{label}.png").exists():
    n += 1
out_path = out_dir / f"screenshot-{n}{label}.png"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto(url, wait_until="networkidle")
    page.screenshot(path=str(out_path), full_page=True)
    browser.close()

print(f"Saved: {out_path}")
