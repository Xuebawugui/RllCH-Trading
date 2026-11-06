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
          background: "#1c1917",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 3,
            border: "1px solid #78716c",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 5,
            left: 6,
            right: 6,
            height: 1,
            background: "#a8a29e",
          }}
        />
        <span
          style={{
            marginTop: -1,
            fontSize: 19,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 500,
            color: "#fafaf9",
            letterSpacing: "-0.04em",
          }}
        >
          R
        </span>
      </div>
    ),
    { ...size },
  );
}
