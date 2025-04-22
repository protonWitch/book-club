export function ArchiveCard({ book }) {
  return (
    <div className="archive-card">
      <img src={book.image} alt={book.title} />
      <div className="archive-details">
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
      </div>
    </div>
  );
}
