import { ImageResponse } from "next/og";

export const alt = "Hla Hijazi, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#020617",
        color: "#ffffff",
      }}
    >
      <div style={{ fontSize: 28, color: "#4ade80", letterSpacing: 6 }}>
        FULL-STACK DEVELOPER
      </div>
      <div style={{ fontSize: 88, fontWeight: 800, marginTop: 20 }}>
        Hla Hijazi
      </div>
      <div style={{ fontSize: 34, color: "#94a3b8", marginTop: 24 }}>
        Next.js · React · Node.js · AI Integration · SEO
      </div>
    </div>,
    size,
  );
}
