"use client";
import { useEffect, useState } from "react";

export default function EventPage() {
  const [raised, setRaised] = useState(0);
  const [goal, setGoal] = useState(0);

  useEffect(() => {
    fetch("/api/invest")
      .then(res => res.json())
      .then(data => {
        setRaised(data.raised);
        setGoal(data.goal);
      });
  }, []);

  const invest = async () => {
    const res = await fetch("/api/invest", {
      method: "POST",
    });

    const data = await res.json();
    setRaised(data.raised);
  };

  const progress = goal ? (raised / goal) * 100 : 0;

  return (
    <main style={{ fontFamily: "Inter, Arial", padding: 32 }}>
      <h1 style={{ fontSize: 36 }}>Bitcoin Chile 2026</h1>

      <p style={{ marginTop: 10, color: "#555" }}>
        Evento sobre adopción de Bitcoin en Latinoamérica.
      </p>

      <div style={{
        marginTop: 20,
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 12,
        maxWidth: 500
      }}>
        <h3>Pool de inversión</h3>

        <p>${raised.toLocaleString()} recaudados</p>
        <p>Meta: ${goal.toLocaleString()}</p>

        <div style={{
          height: 10,
          background: "#eee",
          borderRadius: 5,
          marginTop: 10,
          overflow: "hidden"
        }}>
          <div style={{
            width: `${progress}%`,
            height: "100%",
            background: "#0ea5a5"
          }} />
        </div>

        <button
          onClick={invest}
          style={{
            marginTop: 15,
            padding: "8px 14px",
            borderRadius: 8,
            background: "#0ea5a5",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          Invertir $500
        </button>
      </div>
    </main>
  );
}
