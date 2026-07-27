import { ImageResponse } from "next/og";

export const alt =
  "Miloš Dimitrijević — Full-Stack Developer Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "#070806",
          color: "#f5f5f0",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-100px",
            top: "-130px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            backgroundColor: "#d7ff38",
            opacity: 0.95,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "88px",
            top: "100px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            border: "2px solid rgba(7, 8, 6, 0.25)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: "32px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "32px",
                fontWeight: 900,
                letterSpacing: "-3px",
              }}
            >
              M
              <span style={{ color: "#d7ff38" }}>
                D
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginRight: "390px",
                color: "#9b9b91",
                fontSize: "16px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Full-stack developer
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "80px",
                lineHeight: 0.88,
                fontWeight: 900,
                letterSpacing: "-6px",
                textTransform: "uppercase",
              }}
            >
              MILOŠ
            </div>

            <div
              style={{
                display: "flex",
                color: "#d7ff38",
                fontSize: "80px",
                lineHeight: 0.88,
                fontWeight: 900,
                letterSpacing: "-6px",
                textTransform: "uppercase",
              }}
            >
              DIMITRIJEVIĆ
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "32px",
                maxWidth: "650px",
                color: "#a3a39a",
                fontSize: "23px",
                lineHeight: 1.4,
              }}
            >
              Building useful, thoughtful and memorable digital products.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "30px",
              color: "#73736c",
              fontSize: "15px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            <span>Design</span>
            <span style={{ color: "#d7ff38" }}>•</span>
            <span>Development</span>
            <span style={{ color: "#d7ff38" }}>•</span>
            <span>Digital products</span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: "112px",
            top: "235px",
            display: "flex",
            fontSize: "100px",
            fontWeight: 900,
            color: "#070806",
            letterSpacing: "-10px",
            zIndex: 3,
          }}
        >
          MD
        </div>
      </div>
    ),
    size,
  );
}