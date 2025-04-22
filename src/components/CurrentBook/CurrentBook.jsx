import { BookCard } from "./BookCard";

export function CurrentBook({ books }) {
  return (
    <main className="current-book">
      <ul>
        {books.map((book) =>
          book.isCurrent === 1 ? (
            <BookCard book={book} key={book.title} />
          ) : null
        )}
      </ul>
    </main>
  );
}
