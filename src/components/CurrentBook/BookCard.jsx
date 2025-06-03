import { useState } from "react";

export function BookCard({ book }) {
  const [startingPage, setStartingPage] = useState(0);
  const todaysDate = new Date(Date.now()).toLocaleDateString("en-US");

  function calculatePagesPerDay(book, startingPage) {
    if (!book?.pages || !book?.meetingDate) {
      console.error("Invalid book object or missing properties.");
      return null;
    }

    const totalPages = book.pages - startingPage;
    const todaysDate = new Date(Date.now()).toLocaleDateString("en-US");
    const daysUntilMeeting =
      (Date.parse(book.meetingDate) - Date.parse(todaysDate)) /
      (1000 * 3600 * 24);

    if (daysUntilMeeting <= 0) {
      console.error("Meeting date has already passed or is invalid.");
      return null;
    }

    return Math.round(totalPages / daysUntilMeeting);
  }

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />

      <div className="book-details">
        <h1 className="book-title">{book.title}</h1>
        <h2 className="book-author">{book.author}</h2>
        <p>Meeting Date: {book.meetingDate}</p>
      </div>
      <div className="pages-left">
        <h3>What's the outlook boss?</h3>
        <p>
          <label>What page are you on? </label>
          <input
            className={
              book.meetingDate === todaysDate
                ? " inputBox disabled"
                : "inputBox"
            }
            type="text"
            value={startingPage}
            onChange={(e) => setStartingPage(Number(e.target.value))}
            disabled={book.meetingDate === todaysDate}
          ></input>
        </p>
        {book.meetingDate === todaysDate ? (
          <p>You are boned...</p>
        ) : (
          <>
            {" "}
            <label>
              Read {calculatePagesPerDay(book, startingPage)} pages per day to
              finish in time
              {calculatePagesPerDay(book, startingPage) >= 50 ? "😱" : "😀"}
            </label>
          </>
        )}
      </div>
    </div>
  );
}
