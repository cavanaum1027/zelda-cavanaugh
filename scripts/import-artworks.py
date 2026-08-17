#!/usr/bin/env python3
"""Copy original extra product photos from Desktop/Zelda Site/Artworks into public/works."""

from __future__ import annotations

import json
import re
import subprocess
import unicodedata
from pathlib import Path

ROOT = Path("/Users/michellecavanaugh/Desktop/zelda-cavanaugh")
SOURCE = Path("/Users/michellecavanaugh/Desktop/Zelda Site/Artworks")
DEST = ROOT / "public" / "works"
WORKS_TS = ROOT / "src" / "data" / "works.ts"
OUT_TS = ROOT / "src" / "data" / "work-images.ts"

WEB_EXT = {".jpg", ".jpeg", ".png", ".webp"}
HEIC_EXT = {".heic"}
SKIP_DIR = {
    "midjourney",
    "iphone",
    "phone",
    "coa",
    "certificate of authenticity",
}
SKIP_NAME = {"claude", "burn", "catatonic", "goldfish"}
UUID_RE = re.compile(
    r"^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", re.I
)
IMG_RE = re.compile(r"(IMG[_-]?\d+)", re.I)
MAX_IMAGES = 12
MAX_PX = 1800

ALIASES = {
    "happy-esque": ["Happy-esque", "Happy"],
    "camouflage": ["Camouflage", "Camoflage"],
    "versohnung": ["Versöhnung", "Versöhnung", "Versohnung"],
    "ocean by night": ["Ocean by Night", "Red"],
    "dear": ["Dear"],
    "& forgive us": ["& Forgive Us"],
    "derailment": ["Derailment"],
    "fairy tales & song": ["Fairy Tales & Song"],
    "butter flies": ["Butter Flies"],
    "self actualization": ["Self Actualization"],
    "my compass is broken": ["My Compass is Broken"],
    "flight of ideas": ["Flight of Ideas"],
    "almost steady": ["Almost Steady"],
    "blue mnemosyne": ["Blue Mnemosyne"],
    "moon by night": ["Moon by Night"],
    "neural orchestra": ["Neural Orchestra"],
    "symphony of neural pathways": ["Symphony of Neural Pathways"],
}


def norm(text: str) -> str:
    text = unicodedata.normalize("NFKD", text)
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    text = text.lower().replace("&", " and ")
    text = re.sub(r"[^a-z0-9]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def parse_works() -> list[dict]:
    text = WORKS_TS.read_text()
    works = []
    for block in re.finditer(
        r"\{\s*slug:\s*\"([^\"]+)\",\s*title:\s*\"([^\"]+)\",.*?image:\s*sq\(\"([^\"]+)\",\s*\"([^\"]+)\"\)",
        text,
        re.S,
    ):
        works.append(
            {
                "slug": block.group(1),
                "title": block.group(2),
                "cdn_id": block.group(3),
                "cdn_file": block.group(4),
            }
        )
    return works


def folder_map() -> dict[str, Path]:
    mapping = {}
    for path in SOURCE.iterdir():
        if path.is_dir() and not path.name.startswith("."):
            mapping[norm(path.name)] = path
            mapping[path.name.lower()] = path
    return mapping


def find_folder(work: dict, folders: dict[str, Path]) -> Path | None:
    title_n = norm(work["title"])
    slug_n = norm(work["slug"].replace("-", " "))
    for key in (title_n, slug_n, work["title"].lower(), work["slug"].lower()):
        if key in folders:
            return folders[key]
    for alias_key, names in ALIASES.items():
        if title_n == norm(alias_key) or slug_n == norm(alias_key):
            for name in names:
                found = folders.get(norm(name)) or folders.get(name.lower())
                if found:
                    return found
    cdn_file = work["cdn_file"].replace("+", " ")
    img = IMG_RE.search(cdn_file)
    uuid = UUID_RE.search(work["cdn_id"])
    for folder in {p for p in folders.values()}:
        names = " ".join(p.name for p in folder.rglob("*") if p.is_file())
        if img and img.group(1).upper() in names.upper():
            return folder
        if uuid and uuid.group(0).lower() in names.lower():
            return folder
        stem = Path(cdn_file).stem.lower()
        if stem and stem in names.lower() and len(stem) > 4:
            return folder
    return None


def is_skipped_dir(path: Path) -> bool:
    return any(part.lower() in SKIP_DIR for part in path.relative_to(SOURCE).parts)


def collect_candidates(folder: Path) -> list[Path]:
    files: list[Path] = []
    for path in folder.rglob("*"):
        if not path.is_file():
            continue
        if path.name.startswith(".") or path.name == ".DS_Store":
            continue
        if is_skipped_dir(path.parent):
            continue
        stem = Path(path.stem.split()[0]).name.lower()
        if any(skip in path.stem.lower() for skip in SKIP_NAME):
            continue
        ext = path.suffix.lower()
        if ext not in WEB_EXT | HEIC_EXT:
            continue
        if path.name.lower().startswith("60_"):
            continue
        files.append(path)

    preferred_dirs = {"finals", "jpeg", "jpgs", "pngs", "ga_photos", "art", "jpegs"}
    in_preferred = [
        p
        for p in files
        if any(part.lower() in preferred_dirs for part in p.relative_to(folder).parts)
    ]
    if in_preferred:
        files = in_preferred + [
            p for p in files if p not in in_preferred and "smalls" not in str(p).lower()
        ]

    # Drop HEIC when a raster of the same stem exists.
    rasters = {p.stem.lower() for p in files if p.suffix.lower() in WEB_EXT}
    files = [
        p
        for p in files
        if p.suffix.lower() in WEB_EXT or p.stem.lower() not in rasters
    ]

    # Prefer non-UUID files.
    named = [p for p in files if not UUID_RE.match(p.stem)]
    if named:
        files = named

    smalls = [p for p in files if "smalls" in str(p).lower()]
    others = [p for p in files if p not in smalls]
    files = others or smalls
    return files


def sort_key(path: Path, title: str) -> tuple:
    name = path.stem.lower()
    title_n = norm(title).replace(" ", "")
    name_n = norm(path.stem).replace(" ", "")
    is_hero = int(title_n not in name_n and name not in {"full-pic", "full pic", "fullpic"})
    num = re.search(r"(\d+)$", path.stem.replace(" ", ""))
    img = IMG_RE.search(path.stem)
    return (
        is_hero,
        0 if "full" in name else 1,
        int(num.group(1)) if num and not img else 10_000,
        int(img.group(1)[-4:]) if img and img.group(1)[-4:].isdigit() else 20_000,
        name,
    )


def convert(src: Path, dest: Path) -> bool:
    dest.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        "sips",
        "-s",
        "format",
        "jpeg",
        "-s",
        "formatOptions",
        "82",
        "-Z",
        str(MAX_PX),
        str(src),
        "--out",
        str(dest),
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    return result.returncode == 0 and dest.exists() and dest.stat().st_size > 1000


def main() -> None:
    works = parse_works()
    folders = folder_map()
    DEST.mkdir(parents=True, exist_ok=True)
    mapping: dict[str, list[str]] = {}
    missing: list[str] = []
    report = []

    for work in works:
        folder = find_folder(work, folders)
        if not folder:
            missing.append(work["slug"])
            report.append(f"{work['slug']}: NO FOLDER")
            continue
        candidates = collect_candidates(folder)
        candidates.sort(key=lambda p: sort_key(p, work["title"]))
        # de-dupe by stem
        seen = set()
        unique = []
        for path in candidates:
            key = path.stem.lower().replace(" ", "")
            if key in seen:
                continue
            seen.add(key)
            unique.append(path)
        unique = unique[:MAX_IMAGES]
        if not unique:
            missing.append(work["slug"])
            report.append(f"{work['slug']}: folder {folder.name} but no usable images")
            continue

        out_dir = DEST / work["slug"]
        if out_dir.exists():
            for old in out_dir.glob("*"):
                old.unlink()
        urls = []
        for index, src in enumerate(unique, start=1):
            dest = out_dir / f"{index:02d}.jpg"
            if convert(src, dest):
                urls.append(f"/works/{work['slug']}/{index:02d}.jpg")
        mapping[work["slug"]] = urls
        report.append(
            f"{work['slug']}: {len(urls)} images from {folder.name}"
        )

    OUT_TS.write_text(
        "export const localWorkImages: Record<string, string[]> = "
        + json.dumps(mapping, indent=2)
        + ";\n"
    )
    (ROOT / "scripts" / "import-artworks-report.txt").write_text("\n".join(report) + "\n")
    print("\n".join(report))
    print(f"\nMapped {len(mapping)} / {len(works)} works. Missing: {missing}")


if __name__ == "__main__":
    main()
