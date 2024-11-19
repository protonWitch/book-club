import React from "react";
import { useState } from "react";

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

const booksSample = [
  {
    image: "AWalkInTheWoods.jpg",
    title: "A Walk in the Woods",
    author: "Bill Bryson",
    pages: 276,
    meetingDate: "12/10/2024",
    meetingLink: "",
    isCurrent: 1,
    member: "Monika",
  },
  {
    image: "3BodyProblem.jpg",
    title: "The Three Body Problem",
    author: "Cixin Liu",
    pages: 416,
    meetingDate: "11/9/2024",
    meetingLink: "",
    isCurrent: 0,
    member: "Derek",
  },
  {
    image: "10thOfDecember.jpg",
    title: "10th of December",
    author: "George Saunders",
    pages: 288,
    meetingDate: "10/10/2024",
    meetingLink: "",
    isCurrent: 0,
    member: "Peter",
  },
  {
    image: "TheSongOfAchilles.jpg",
    title: "The Song of Achilles",
    author: "Madeline Miller",
    pages: 369,
    meetingDate: "08/15/2024",
    meetingLink: "",
    isCurrent: 0,
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
  { name: "Monika", id: 1, isActive: 1, isCurrent: 1 },
  { name: "Rylei", id: 2, isActive: 1, isCurrent: 0 },
  { name: "Shannon", id: 3, isActive: 1, isCurrent: 0 },
  { name: "Peter", id: 4, isActive: 1, isCurrent: 0 },
  { name: "Kevin", id: 5, isActive: 1, isCurrent: 0 },
  { name: "Derek", id: 6, isActive: 1, isCurrent: 0 },
];

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
      <p>{member.name}</p>
    </div>
  );
}

function BookCard({ book }) {
  const [startingPage, setStartingPage] = useState(0);
  const pagesPerDay = Math.round(
    (book.pages - startingPage) /
      ((Date.parse(book.meetingDate) - Date.now()) / (1000 * 3600 * 24))
  );

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />

      <div className="book-details">
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>Meeting Date: {book.meetingDate}</p>
      </div>
      <div className="pages-left">
        <h3></h3>
        <p>
          <label>What page are you on? </label>
          <input
            className="inputBox"
            type="text"
            value={startingPage}
            onChange={(e) => setStartingPage(Number(e.target.value))}
          ></input>
        </p>
        <label>
          You must read {pagesPerDay} pages per day to finish by the meeting
          date {pagesPerDay >= 50 ? "😱" : "😀"}
        </label>
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
