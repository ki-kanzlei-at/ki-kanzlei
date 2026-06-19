import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KI Kanzlei - KI-Automatisierung für Unternehmen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg,#0a1424 0%,#0f1d3a 55%,#1a2f5c 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#3985ef",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            KI
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.01em" }}>ki kanzlei</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: 980 }}>
            KI-Automatisierung für Unternehmen
          </div>
          <div style={{ fontSize: 30, color: "#9cc2f5", maxWidth: 900 }}>
            Voicebots, KI-Agenten, Wissensdatenbanken und Automatisierung. DSGVO-konform, EU-gehostet.
          </div>
        </div>

        <div style={{ display: "flex", gap: 28, fontSize: 24, color: "rgba(255,255,255,0.8)" }}>
          <span>DSGVO-konform</span>
          <span>,</span>
          <span>EU-Hosting</span>
          <span>,</span>
          <span>Made in Austria</span>
          <span>,</span>
          <span>ki-kanzlei.at</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
