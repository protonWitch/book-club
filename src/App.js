import React from "react";

import { useState } from "react";

export default function App() {
  return (
    <div>
      <Menu />

      <Header />

      <CurrentBook />

      <Stats />
    </div>
  );
}

const booksSample = [
  {
    image: "TheSongOfAchilles.jpg",

    title: "The Song of Achilles",

    author: "Madeline Miller",

    pages: 369,

    meetingDate: "08/15/2024",

    meetingLink: "",

    isCurrent: 1,

    member: "Kevin",
  },

  {
    image: "TheWindKnowsMyName.jpg",

    title: "The Wind Knows My Name",

    author: "Isabel Allende",

    pages: 273,

    meetingDate: "07/25/2024",

    meetingLink: "",

    isCurrent: 0,

    member: "Shannon",
  },

  {
    image: "ThePrincessBride.jpg",

    title: "The Princess Bride",

    author: "William Goldman",

    pages: 512,

    meetingDate: "06/11/2024",

    meetingLink: "",

    isCurrent: 0,

    member: "Rylei",
  },
];

const memberSample = [
  { name: "Monika", order: 1, isActive: 1 },

  { name: "Rylei", order: 2, isActive: 1 },

  { name: "Shannon", order: 3, isActive: 1 },

  { name: "Peter", order: 4, isActive: 1 },

  { name: "Kevin", order: 5, isActive: 1 },

  { name: "Derek", order: 6, isActive: 1 },
];

function Header() {
  return <header className="header">📚 BOOK CLUB 📚</header>;
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
    <div>
      <button onClick={handleAddNewBook}>Add New Book</button>

      <button onClick={handleArchive}>View Archive</button>

      <button onClick={handleWhoIsNext}>Who Is Next?</button>
    </div>
  );
}

function BookCard({ book }) {
  const [startingPage, setStartingPage] = useState(0);

  return (
    <li className="book">
      <img src={book.image} alt={book.title} />

      <div>
        <h1>{book.title}</h1>

        <h2>{book.author}</h2>

        <p>Chosen By: {book.member}</p>

        <p>Pages: {book.pages}</p>

        <p>Meeting Date: {book.meetingDate}</p>

        <p>
          Days to Finish Book:{" "}
          {Math.round(
            (Date.parse(book.meetingDate) - Date.now()) / (1000 * 3600 * 24)
          )}
        </p>

        <h3>
          How many pages do I have to read per day to finish by the meeting
          date?!
        </h3>

        <label>Page I am on now: </label>

        <input
          type="text"
          value={startingPage}
          onChange={(e) => setStartingPage(Number(e.target.value))}
        ></input>

        <label>
          Pages per day:{" "}
          {Math.round(
            (book.pages - startingPage) /
              ((Date.parse(book.meetingDate) - Date.now()) / (1000 * 3600 * 24))
          )}
        </label>
      </div>
    </li>
  );
}

function Archive() {
  return (
    <main>
      <header>ARCHIVE</header>

      <ul>
        {booksSample.map((book) =>
          book.isCurrent === 0 ? (
            <BookCard book={book} key={book.title} />
          ) : null
        )}
      </ul>
    </main>
  );
}

function CurrentBook() {
  return (
    <main>
      <h2>Current Book</h2>

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
