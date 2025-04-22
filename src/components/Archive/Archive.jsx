import { ArchiveCard } from "./ArchiveCard";

export function Archive({ books }) {
  return (
    <div className="archive">
      <header className="header arch">ARCHIVE</header>

      <ul className="archive-grid">
        {books.map((book) =>
          book.isCurrent === 0 ? (
            <ArchiveCard book={book} key={book.title} />
          ) : null
        )}
      </ul>
    </div>
  );
}
