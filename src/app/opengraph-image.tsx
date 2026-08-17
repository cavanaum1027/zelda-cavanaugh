import { ImageResponse } from "next/og";

export const alt = "Zelda Cavanaugh — DSM-5 studies in gilding and embroidery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#0c0c0c",
          color: "#fcfcf4",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", color: "#f43460", fontSize: 28 }}>+</div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            marginTop: 24,
          }}
        >
          Zelda Cavanaugh
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "rgba(252,252,244,0.62)",
            marginTop: 28,
            maxWidth: 820,
          }}
        >
          DSM-5 studies in gilding and embroidery
        </div>
      </div>
    ),
    size,
  );
}
