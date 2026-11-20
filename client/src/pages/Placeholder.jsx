export default function Placeholder({ title, stories }) {
  return (
    <section>
      <h2>{title}</h2>
      <p className="muted">Placeholder screen. Not implemented yet.</p>
      {stories.length > 0 && <p>User stories: {stories.join(', ')}</p>}
    </section>
  );
}
