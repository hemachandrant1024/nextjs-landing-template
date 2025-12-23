export default function Hero({ data, theme }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">{data.title}</h1>
      <p className="mt-4 text-xl opacity-80">{data.subtitle}</p>
      <button
        className="mt-6 px-6 py-3 rounded font-semibold"
        style={{ background: theme.primary }}
      >
        {data.cta}
      </button>
    </section>
  );
}
