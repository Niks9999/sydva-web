export default function Hero() {
  return (
    <section className="px-6 py-32 text-center bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-5xl font-bold tracking-tight">SY-DVA</h1>

      <p className="mt-4 text-xl text-gray-600">
        Pametno upravljanje HVAC in energetskih sistemov
      </p>

      <p className="mt-6 max-w-2xl mx-auto text-gray-500">
        Centraliziran nadzor toplotnih črpalk, HVAC naprav in nadzornih sistemov.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="mailto:info@sydva.com"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
        >
          Kontaktiraj nas
        </a>

        <button
          disabled
          className="px-6 py-3 rounded-lg border text-gray-400 cursor-not-allowed"
        >
          Dostop do aplikacije – kmalu
        </button>
      </div>
    </section>
  );
}
