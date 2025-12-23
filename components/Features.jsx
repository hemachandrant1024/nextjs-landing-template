export default function Features({ items }) {
  return (
    <section className="py-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {items.map((f, i) => (
        <div key={i} className="p-6 border rounded">
          {f}
        </div>
      ))}
    </section>
  );
}
