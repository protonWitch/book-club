import React from "react";
import { useState } from "react";
import { booksSample, memberSample } from "./bookSample";

export default function App() {
  return (
    <div className="container">
      <Menu />
      <Header />
      <CurrentBook />
      <Sidebar />
      <Archive />
    </div>
  );
}

function Header() {
  return <header className="header">Book Club</header>;
}

function Stats() {
  return (
    <footer className="stats">
      <span>Books Read YTD: ~ </span>

      <span>Books Read All Time: ~</span>

      <span>Pages Read YTD: ~</span>

      <span>Pages Read All Time: ~</span>
    </footer>
  );
}

function Menu() {
  function handleAddNewBook() {}

  function handleArchive() {}

  function handleWhoIsNext() {}

  return (
    <nav className="nav">
      <button onClick={handleAddNewBook}>Add New Book</button>

      <button onClick={handleArchive}>View Archive</button>

      <button onClick={handleWhoIsNext}>Who Is Next?</button>
    </nav>
  );
}

function Sidebar() {
  return (
    <aside className="member-list">
      <h2 className="members-title">Members</h2>
      <ul>
        {memberSample.map((member) => (
          <MemberCard member={member} key={member.id} />
        ))}
      </ul>
    </aside>
  );
}

function MemberCard({ member }) {
  // const currentId=
  // const upNextId=
  return (
    <div className="member-card">
      <div className="member-line">
        <p className={member.isNext ? "upNext" : ""}>{member.name}</p>
        {member.isNext ? <span className="up-next-indicator">NEXT</span> : ""}
      </div>
    </div>
  );
}

function BookCard({ book }) {
  const [startingPage, setStartingPage] = useState(0);
  const todaysDate = new Date(Date.now()).toLocaleDateString("en-US");
  // const pagesPerDay = Math.round(
  //   (book.pages - startingPage) /
  //     ((Date.parse(book.meetingDate) - Date.now()) /
  //       (1000 * 3600 * 24))
  // );

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

    console.log("startingPage:", startingPage);
    console.log("book.meetingDate:", book.meetingDate);
    console.log(todaysDate);
    console.log(daysUntilMeeting);

    return Math.round(totalPages / daysUntilMeeting);
  }

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />

      <div className="book-details">
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>Meeting Date: {book.meetingDate}</p>
      </div>
      <div className="pages-left">
        <h3>
          How many pages do I have to read per day to finish by the meeting
          date?
        </h3>
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
          <p>
            Today is the day of the meeting! What were you thinking?! You are
            boned...
          </p>
        ) : (
          <>
            {" "}
            <label>
              You must read {calculatePagesPerDay(book, startingPage)} pages per
              day to finish by the meeting date{" "}
              {calculatePagesPerDay(book, startingPage) >= 50 ? "😱" : "😀"}
            </label>
          </>
        )}
      </div>
    </div>
  );
}

function Archive() {
  return (
    <div className="archive">
      <header className="header arch">ARCHIVE</header>

      <ul className="archive-grid">
        {booksSample.map((book) =>
          book.isCurrent === 0 ? (
            <ArchiveCard book={book} key={book.title} />
          ) : null
        )}
      </ul>
    </div>
  );
}

function ArchiveCard({ book }) {
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

function CurrentBook() {
  return (
    <main className="current-book">
      <ul>
        {booksSample.map((book) =>
          book.isCurrent === 1 ? (
            <BookCard book={book} key={book.title} />
          ) : null
        )}
      </ul>
    </main>
  );
}
