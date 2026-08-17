import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0c0c",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 100,
            height: 100,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 40,
              top: 0,
              width: 20,
              height: 100,
              background: "#f43460",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 40,
              width: 100,
              height: 20,
              background: "#f43460",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
