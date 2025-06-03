import React from "react";
import { books, members } from "./bookSample";
import { Nav } from "./components/Nav/Nav";
import { Members } from "./components/Members/Members";
import { Header } from "./components/Header/Header";
import { CurrentBook } from "./components/CurrentBook/CurrentBook";
import { Archive } from "./components/Archive/Archive";
import { useRef } from "react";

export default function App() {
  // eslint-disable-next-line no-undef
  const archiveRef = useRef(null);

  return (
    <div className="container">
      <Nav archiveRef={archiveRef} className="nav-el" />
      <Header className="header-el" />
      <CurrentBook className="current-book-el" books={books} />
      <Members className="member-el" members={members} />
      <Archive ref={archiveRef} className="archvive-el" books={books} />
    </div>
  );
}
