import React from "react";
import { books, members } from "./bookSample";
import { Nav } from "./components/Nav/Nav";
import { Members } from "./components/Members/Members";
import { Header } from "./components/Header/Header";
import { CurrentBook } from "./components/CurrentBook/CurrentBook";
import { Archive } from "./components/Archive/Archive";

export default function App() {
  return (
    <div className="container">
      <Nav className="nav-el" />
      <Header className="header-el" />
      <CurrentBook className="current-book-el" books={books} />
      <Members className="member-el" members={members} />
      <Archive className="archvive-el" books={books} />
    </div>
  );
}
