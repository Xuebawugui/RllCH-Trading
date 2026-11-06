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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1917",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 14,
            border: "2px solid #78716c",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 32,
            right: 32,
            height: 2,
            background: "#a8a29e",
          }}
        />
        <span
          style={{
            marginTop: -6,
            fontSize: 108,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 500,
            color: "#fafaf9",
            letterSpacing: "-0.04em",
          }}
        >
          R
        </span>
        <span
          style={{
            marginTop: 4,
            fontSize: 11,
            letterSpacing: "0.35em",
            color: "#a8a29e",
            textTransform: "uppercase",
          }}
        >
          RIICH
        </span>
      </div>
    ),
    { ...size },
  );
}
