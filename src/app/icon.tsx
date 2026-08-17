import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            width: 18,
            height: 18,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 7,
              top: 0,
              width: 4,
              height: 18,
              background: "#f43460",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 7,
              width: 18,
              height: 4,
              background: "#f43460",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
