"""Rename every photo in a folder to a clean, numbered name.
Code to Ship, Module 9. TEST ON A COPY OF YOUR FOLDER FIRST.

Example: photos/IMG_4821.JPG -> photos/birthday-2026-10-001.jpg
Run:  python rename_photos.py   (or paste into a Google Colab cell)
"""
from pathlib import Path

FOLDER = Path("photos")          # the folder with your pictures
PREFIX = "birthday-2026-10"      # the new name pattern
EXTENSIONS = {".jpg", ".jpeg", ".png", ".heic"}

photos = sorted(p for p in FOLDER.iterdir() if p.suffix.lower() in EXTENSIONS)
print(f"Found {len(photos)} photos")

for number, old in enumerate(photos, start=1):
    new = FOLDER / f"{PREFIX}-{number:03}{old.suffix.lower()}"
    if new.exists():
        print("Skipping (name taken):", new.name)
        continue
    old.rename(new)
    print(old.name, "->", new.name)

print("Done.")
