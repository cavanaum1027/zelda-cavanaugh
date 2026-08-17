#!/usr/bin/env python3
"""Import Field Notes essays from the Substack RSS feed into src/data/notes.ts."""

from __future__ import annotations

import html as html_lib
import json
import re
import urllib.request
import xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path("/Users/michellecavanaugh/Desktop/zelda-cavanaugh")
OUT = ROOT / "src" / "data" / "notes.ts"
FEED = "https://michellecavanaugh.substack.com/feed"
API = "https://michellecavanaugh.substack.com/api/v1/posts/{slug}"

WORK_FOR = {
    "43-and-other-beautiful-lies": "perception",
    "bird-watching-the-same-five-thoughts": "rumination",
    "one-true-sentence": "creation",
    "the-gospel-of-the-ai-evangelists": "command",
    "the-numbers-dont-lie-but-the-headlines": "diffident",
    "agents-arent-going-to-take-your-job": "avolition",
    "that-hammer-isnt-a-carpenter": "tether",
    "good-at-something": "self-actualization",
    "so-youve-decided-to-do-product-operations": "pendulum",
    "how-the-internet-is-quietly-breaking": "thoughts",
    "the-hollow-feed": "beloved",
    "the-vocabulary-police-dont-read-enough": "nepenthe",
    "keep-your-word-kid": "ophelia",
    "operationalizing-data-plumbing-for": "lithium",
    "the-half-life-of-digital-thought": "toska",
    "dancing-lessons-for-the-machines": "identity",
    "the-cultural-geiger-counter": "avoid",
    "context-debt": "dolorifuge",
    "breakfast-of-consultants": "rue",
    "product-management-is-brand-management": "awen",
}

SKIP_TAGS = {
    "script",
    "style",
    "iframe",
    "button",
    "svg",
    "picture",
}
VOID_TAGS = {
    "img",
    "source",
    "path",
    "g",
    "line",
    "polyline",
    "br",
    "hr",
}


class NoteParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.blocks: list[dict] = []
        self.current: str | None = None
        self.buf: list[str] = []
        self.skip = 0
        self.in_callout = False
        self.list_items: list[str] = []
        self.list_ordered = False
        self.in_list = False

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr = {k: v or "" for k, v in attrs}
        if tag in VOID_TAGS:
            if tag == "br":
                self.buf.append("\n")
            return
        if tag in SKIP_TAGS:
            self.skip += 1
            return
        if self.skip:
            return
        if tag == "div" and "callout-block" in attr.get("class", ""):
            self.flush_text()
            self.current = "quote"
            self.in_callout = True
            return
        if tag in {"ul", "ol"}:
            self.flush_text()
            self.in_list = True
            self.list_ordered = tag == "ol"
            self.list_items = []
            return
        if tag == "li":
            self.flush_text()
            self.current = "li"
            return
        if tag == "blockquote":
            self.flush_text()
            self.current = "quote"
            return
        if tag == "figcaption":
            self.flush_text()
            self.current = "p"
            return
        if tag in {"h2", "h3", "h4"}:
            self.flush_text()
            self.current = "h3" if tag == "h4" else tag
            return
        if tag in {"pre", "code"} and self.current not in {"h2", "h3", "p", "quote", "li"}:
            self.flush_text()
            self.current = "code"
            return
        if tag == "p" and not self.in_callout and not self.in_list:
            self.flush_text()
            self.current = "p"

    def handle_endtag(self, tag: str) -> None:
        if tag in SKIP_TAGS:
            self.skip = max(0, self.skip - 1)
            return
        if self.skip:
            return
        if tag == "div" and self.in_callout:
            self.flush_text()
            self.in_callout = False
            return
        if tag in {"ul", "ol"}:
            self.flush_text()
            if self.list_items:
                self.blocks.append(
                    {
                        "type": "list",
                        "ordered": self.list_ordered,
                        "items": self.list_items,
                    }
                )
            self.list_items = []
            self.in_list = False
            return
        if tag in {"p", "h2", "h3", "h4", "li", "blockquote", "pre", "code", "figcaption"}:
            self.flush_text()

    def handle_data(self, data: str) -> None:
        if self.skip:
            return
        self.buf.append(data)

    def flush_text(self) -> None:
        text = html_lib.unescape("".join(self.buf))
        text = re.sub(r"[ \t]+", " ", text)
        text = re.sub(r"\n{3,}", "\n\n", text).strip()
        self.buf = []
        if not text:
            if self.current == "li":
                self.current = None
            elif not self.in_callout and not self.in_list:
                self.current = None
            return
        if self.current == "li":
            self.list_items.append(text)
            self.current = None
            return
        kind = self.current or "p"
        if kind in {"p", "h2", "h3", "quote", "code"}:
            self.blocks.append({"type": kind, "text": text})
        else:
            self.blocks.append({"type": "p", "text": text})
        if not self.in_callout:
            self.current = None


def clean_dek(text: str) -> str:
    text = html_lib.unescape(re.sub(r"<[^>]+>", " ", text or ""))
    return re.sub(r"\s+", " ", text).strip()


def fetch_json(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as response:
        return json.loads(response.read().decode("utf-8"))


def full_body(slug: str, rss_html: str) -> str:
    try:
        data = fetch_json(API.format(slug=slug))
        html = data.get("body_html") or ""
        if len(html) > len(rss_html or ""):
            return html
    except Exception as exc:
        print(f"  API miss {slug}: {exc}")
    return rss_html or ""


def slug_from_link(link: str) -> str:
    path = link.rstrip("/").split("/")[-1]
    return re.sub(r"[^a-z0-9-]", "", path.lower())


def main() -> None:
    req = urllib.request.Request(FEED, headers={"User-Agent": "Mozilla/5.0"})
    raw = urllib.request.urlopen(req, timeout=60).read()
    root = ET.fromstring(raw)
    ns = {"content": "http://purl.org/rss/1.0/modules/content/"}
    notes = []
    for item in root.findall(".//item"):
        title = html_lib.unescape((item.findtext("title") or "").strip())
        link = (item.findtext("link") or "").strip()
        dek = clean_dek(item.findtext("description") or "")
        pub = item.findtext("pubDate") or ""
        date = parsedate_to_datetime(pub).date().isoformat()
        slug = slug_from_link(link)
        encoded = item.find("content:encoded", ns)
        rss_html = encoded.text if encoded is not None else ""
        body = full_body(slug, rss_html)
        parser = NoteParser()
        parser.feed(body or "")
        parser.flush_text()
        notes.append(
            {
                "slug": slug,
                "title": title,
                "dek": dek,
                "date": date,
                "substack": link,
                "work": WORK_FOR.get(slug, "beloved"),
                "blocks": parser.blocks,
            }
        )

    payload = json.dumps(notes, indent=2, ensure_ascii=False)
    OUT.write_text(
        "export type NoteBlock =\n"
        '  | { type: "p" | "h2" | "h3" | "quote" | "code"; text: string }\n'
        "  | { type: \"list\"; ordered: boolean; items: string[] };\n\n"
        "export type Note = {\n"
        "  slug: string;\n"
        "  title: string;\n"
        "  dek: string;\n"
        "  date: string;\n"
        "  substack: string;\n"
        "  work: string;\n"
        "  blocks: NoteBlock[];\n"
        "};\n\n"
        f"export const notes: Note[] = {payload};\n\n"
        "export function getNote(slug: string) {\n"
        "  return notes.find((note) => note.slug === slug);\n"
        "}\n"
    )
    print(f"Wrote {len(notes)} notes to {OUT}")
    for note in notes:
        print(f"  {note['date']}  {note['slug']}  ({len(note['blocks'])} blocks)  work={note['work']}")


if __name__ == "__main__":
    main()
