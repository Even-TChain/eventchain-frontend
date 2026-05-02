"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0f19",
        color: "white",
        fontFamily: "Arial",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          EventChain
        </h1>

        <p
          style={{
            fontSize: 26,
            color: "#9ca3af",
            maxWidth: 760,
            lineHeight: 1.6,
          }}
        >
          Plataforma de inversión en eventos sobre blockchain,
          tecnología y experiencias del mundo real.
        </p>

        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <Link href="/event/bitcoin-chile">
            <button
              style={{
                padding: "16px 28px",
                background: "#06b6d4",
                border: "none",
                borderRadius: 14,
                color: "white",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              Ver Evento Demo
            </button>
          </Link>

          <button
            style={{
              padding: "16px 28px",
              background: "transparent",
              border: "1px solid #374151",
              borderRadius: 14,
              color: "white",
              fontSize: 18,
            }}
          >
            Invertir en Eventos
          </button>
        </div>

        <div
          style={{
            marginTop: 100,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              title: "Bitcoin Chile 2026",
              amount: "$13,000",
            },
            {
              title: "ETH Latam Summit",
              amount: "$22,500",
            },
            {
              title: "Solana Builders",
              amount: "$8,900",
            },
          ].map((event, index) => (
            <div
              key={index}
              style={{
                background: "#111827",
                border: "1px solid #1f2937",
                borderRadius: 24,
                padding: 28,
              }}
            >
              <h3
                style={{
                  fontSize: 24,
                  marginBottom: 12,
                }}
              >
                {event.title}
              </h3>

              <p
                style={{
                  color: "#9ca3af",
                  marginBottom: 20,
                }}
              >
                Capital recaudado
              </p>

              <div
                style={{
                  fontSize: 34,
                  fontWeight: "bold",
                }}
              >
                {event.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}