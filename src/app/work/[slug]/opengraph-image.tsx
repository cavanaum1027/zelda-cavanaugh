import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getWork } from "@/data/works";
import { artworkCdnUrl } from "@/lib/seo";

export const runtime = "nodejs";
export const alt = "Artwork by Zelda Cavanaugh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function WorkOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  const title = work?.title ?? "Zelda Cavanaugh";
  const caption = work?.print ? "Giclée print" : work?.diagnosis ?? "Original canvas";

  let artwork: string | null = null;
  if (work?.image) {
    try {
      if (work.image.startsWith("/")) {
        const file = join(process.cwd(), "public", work.image);
        const buffer = await readFile(file);
        artwork = `data:image/jpeg;base64,${buffer.toString("base64")}`;
      } else {
        const response = await fetch(artworkCdnUrl(work.image), {
          cache: "force-cache",
        });
        if (response.ok) {
          const buffer = await response.arrayBuffer();
          const mime = response.headers.get("content-type") || "image/jpeg";
          artwork = `data:${mime};base64,${Buffer.from(buffer).toString("base64")}`;
        }
      }
    } catch {
      artwork = null;
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0c0c0c",
          color: "#fcfcf4",
        }}
      >
        {artwork ? (
          <img
            src={artwork}
            alt=""
            width={1200}
            height={630}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 1200,
              height: 480,
              objectFit: "cover",
            }}
          />
        ) : null}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 56,
            paddingRight: 56,
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 1200,
            height: 150,
            background: "#0c0c0c",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontWeight: 650,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(252,252,244,0.55)",
              marginTop: 8,
            }}
          >
            {caption} — Zelda Cavanaugh
          </div>
        </div>
      </div>
    ),
    size,
  );
}
