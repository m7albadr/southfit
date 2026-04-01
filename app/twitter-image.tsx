import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SouthFit Kuwait — Premium CrossFit & Fitness";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(135deg, #050508 0%, #0a0a12 50%, #050508 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -100,
            top: "50%",
            transform: "translateY(-50%)",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(8,145,178,0.15), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -100,
            top: "50%",
            transform: "translateY(-50%)",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(217,70,239,0.15), transparent 70%)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://southfit.vercel.app/logo.jpg"
          alt=""
          width={140}
          height={140}
          style={{ borderRadius: "50%", marginBottom: 32 }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: "0.15em",
            color: "white",
            fontFamily: "sans-serif",
            display: "flex",
          }}
        >
          SOUTH
          <span style={{ color: "#0891b2" }}>FIT</span>
        </div>
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.4em",
            color: "rgba(255,255,255,0.35)",
            marginTop: 8,
            fontFamily: "sans-serif",
          }}
        >
          KUWAIT
        </div>
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
            marginTop: 28,
            fontFamily: "sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          CrossFit • Bootcamp • Personal Training
        </div>
      </div>
    ),
    { ...size }
  );
}
