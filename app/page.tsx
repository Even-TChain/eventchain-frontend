export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <div className="max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-400">
            EVENTCHAIN
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Eventos reales.
            <br />
            <span className="text-zinc-400">
              Inversión transparente.
            </span>
            <br />
            Reglas en blockchain.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
            Plataforma de inversión en eventos respaldada por smart contracts,
            custodia transparente y tecnología blockchain.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/events"
              className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Explorar eventos
            </a>

            <a
              href="/event/bitcoin-chile"
              className="rounded-2xl border border-zinc-700 px-8 py-4 font-semibold transition hover:bg-zinc-900"
            >
              Ver evento demo
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-6 px-6 pb-24 md:grid-cols-3">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <h3 className="text-2xl font-bold">Bitcoin Chile 2026</h3>
          <p className="mt-4 text-zinc-400">
            Evento blockchain premium con inversión tokenizada.
          </p>
          <p className="mt-6 text-3xl font-bold">$13,000 USD</p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <h3 className="text-2xl font-bold">ETH Latam Summit</h3>
          <p className="mt-4 text-zinc-400">
            Conferencia regional de Ethereum y Web3.
          </p>
          <p className="mt-6 text-3xl font-bold">$22,500 USD</p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <h3 className="text-2xl font-bold">Solana Builders</h3>
          <p className="mt-4 text-zinc-400">
            Encuentro de desarrolladores e inversionistas.
          </p>
          <p className="mt-6 text-3xl font-bold">$8,900 USD</p>
        </div>
      </section>
    </main>
  );
}