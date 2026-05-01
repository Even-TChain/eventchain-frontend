import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "Inter, Arial, sans-serif", padding: 32 }}>
      <h1 style={{ fontSize: 44 }}>EventChain</h1>

      <p style={{ marginTop: 12, color: "#555" }}>
        Plataforma de inversión en eventos sobre blockchain.
      </p>

      <div style={{ marginTop: 20 }}>
        <Link href="/event/bitcoin-chile">
          <button style={{
            padding: "10px 16px",
            borderRadius: 8,
            background: "#0ea5a5",
            color: "#fff",
            border: "none"
          }}>
            Ver evento demo
          </button>
        </Link>
      </div>
    </main>
  );
}
