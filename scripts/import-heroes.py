#!/usr/bin/env python3
"""Download Squarespace hero images into public/works/<slug>/hero.jpg."""

from __future__ import annotations

import json
import re
import subprocess
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import quote

ROOT = Path("/Users/michellecavanaugh/Desktop/zelda-cavanaugh")
DEST = ROOT / "public" / "works"
WORKS_TS = ROOT / "src" / "data" / "works.ts"
OUT_TS = ROOT / "src" / "data" / "work-heroes.ts"
TMP = ROOT / ".tmp-py" / "heroes"
MAX_PX = 1800

CDN = "https://images.squarespace-cdn.com/content/v1/64e7d9b4dff28018353dc5f7"


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


def convert(src: Path, dest: Path) -> bool:
    dest.parent.mkdir(parents=True, exist_ok=True)
    result = subprocess.run(
        [
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
        ],
        capture_output=True,
        text=True,
    )
    return result.returncode == 0 and dest.exists() and dest.stat().st_size > 8000


def fetch_one(work: dict) -> tuple[str, str | None]:
    slug = work["slug"]
    url = (
        f"{CDN}/{quote(work['cdn_id'], safe='-_.~')}/"
        f"{quote(work['cdn_file'], safe='-_.~')}?format=2500w"
    )
    tmp = TMP / f"{slug}.bin"
    dest = DEST / slug / "hero.jpg"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=60) as response:
            data = response.read()
        if len(data) < 8000:
            return slug, f"too small ({len(data)} bytes) {url}"
        tmp.parent.mkdir(parents=True, exist_ok=True)
        tmp.write_bytes(data)
        if not convert(tmp, dest):
            dest.write_bytes(data)
        if dest.exists() and dest.stat().st_size > 8000:
            return slug, None
        return slug, f"convert failed {url}"
    except Exception as exc:
        return slug, f"{exc} {url}"


def main() -> None:
    works = parse_works()
    TMP.mkdir(parents=True, exist_ok=True)
    mapping: dict[str, str] = {}
    errors: list[str] = []
    with ThreadPoolExecutor(max_workers=8) as pool:
        futures = [pool.submit(fetch_one, work) for work in works]
        for future in as_completed(futures):
            slug, error = future.result()
            if error:
                errors.append(f"{slug}: {error}")
                print(f"FAIL {slug}: {error}")
            else:
                mapping[slug] = f"/works/{slug}/hero.jpg"
                print(f"ok   {slug}")
    OUT_TS.write_text(
        "export const localHeroes: Record<string, string> = "
        + json.dumps(dict(sorted(mapping.items())), indent=2)
        + ";\n"
    )
    print(f"\nSaved {len(mapping)} / {len(works)} heroes. Failures: {len(errors)}")
    if errors:
        (ROOT / "scripts" / "import-heroes-report.txt").write_text("\n".join(errors) + "\n")


if __name__ == "__main__":
    main()
