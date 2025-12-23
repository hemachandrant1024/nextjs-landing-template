export default function Pricing({ data }) {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl mb-6">Pricing</h2>
      <div className="flex justify-center gap-6">
        {data.plans.map((p, i) => (
          <div key={i} className="p-6 border rounded">
            <h3 className="text-xl">{p.name}</h3>
            <p className="text-2xl mt-2">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
