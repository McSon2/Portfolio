import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Maxime Saltet — Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fffcf0",
          color: "#000000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: 18,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            opacity: 0.7,
          }}
        >
          MENU / WORK · CONTACT
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 130, lineHeight: 1, letterSpacing: "-0.02em" }}>
            MAXIME
          </div>
          <div style={{ fontSize: 130, lineHeight: 1, letterSpacing: "-0.02em" }}>
            SALTET
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}
        >
          <span>Fullstack — Web · Mobile · Desktop</span>
          <span style={{ opacity: 0.7 }}>2026</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
