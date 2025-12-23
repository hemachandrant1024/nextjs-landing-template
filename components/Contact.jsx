export default function Contact({ data }) {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl mb-4">Contact</h2>
      <p>{data.email}</p>
    </section>
  );
}
