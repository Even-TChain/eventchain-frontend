"use client";

export default function EventPage() {
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
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          EventChain
        </h1>

        <p
          style={{
            fontSize: 24,
            color: "#9ca3af",
            maxWidth: 700,
            lineHeight: 1.5,
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
          }}
        >
          <button
            style={{
              padding: "14px 24px",
              background: "#06b6d4",
              border: "none",
              borderRadius: 12,
              color: "white",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            Explorar Eventos
          </button>

          <button
            style={{
              padding: "14px 24px",
              background: "transparent",
              border: "1px solid #374151",
              borderRadius: 12,
              color: "white",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            Invertir
          </button>
        </div>

        <div
          style={{
            marginTop: 80,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              title: "Bitcoin Chile 2026",
              amount: "$13,000 USD",
            },
            {
              title: "ETH Latam Summit",
              amount: "$22,500 USD",
            },
            {
              title: "Solana Builders",
              amount: "$8,900 USD",
            },
          ].map((event, index) => (
            <div
              key={index}
              style={{
                background: "#111827",
                padding: 24,
                borderRadius: 20,
                border: "1px solid #1f2937",
              }}
            >
              <h3
                style={{
                  fontSize: 24,
                  marginBottom: 10,
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
                Recaudado
              </p>

              <div
                style={{
                  fontSize: 30,
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