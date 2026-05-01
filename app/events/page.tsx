export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Eventos disponibles
      </h1>

      <div className="border border-gray-700 rounded-xl p-6 max-w-xl">
        <h2 className="text-2xl font-semibold mb-2">
          Primer Evento Bitcoin en Chile
        </h2>

        <p className="text-gray-400">Santiago de Chile</p>
        <p className="text-gray-400 mb-4">Q2 2026</p>

        <div className="flex justify-between text-sm mb-2">
          <span>Total: USD 10.000</span>
          <span>35% financiado</span>
        </div>

        <div className="w-full bg-gray-800 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full w-[35%]" />
        </div>
      </div>
    </main>
  );
}
