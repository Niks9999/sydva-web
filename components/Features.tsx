const features = [
  {
    title: "Centralni nadzor",
    text: "Vse naprave in podatki na enem mestu.",
  },
  {
    title: "Pametna logika",
    text: "Avtomatika, urniki in optimizacija delovanja.",
  },
  {
    title: "Pripravljeno za prihodnost",
    text: "Odprta arhitektura in razširljivost.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      {features.map((f) => (
        <div key={f.title} className="p-6 rounded-xl border bg-white">
          <h3 className="text-xl font-semibold">{f.title}</h3>
          <p className="mt-2 text-gray-600">{f.text}</p>
        </div>
      ))}
    </section>
  );
}
