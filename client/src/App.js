import React, { useEffect, useState } from "react";

import { Nav } from "./components/Nav/Nav";
import { Members } from "./components/Members/Members";
import { Header } from "./components/Header/Header";
import { CurrentBook } from "./components/CurrentBook/CurrentBook";
import { Archive } from "./components/Archive/Archive";
import { useRef } from "react";
import { serverUrl } from "./Constants";

export default function App() {
  // eslint-disable-next-line no-undef
  const archiveRef = useRef(null);

  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`http://${serverUrl}/data/books`)
      .then((response) => response.json())
      .then((jsonData) => setBooks(jsonData))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  useEffect(() => {
    fetch(`http://${serverUrl}/data/members`)
      .then((response) => response.json())
      .then((jsonData) => setMembers(jsonData))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="container">
      <Nav archiveRef={archiveRef} members={members} className="nav-el" />
      <Header className="header-el" />
      <CurrentBook className="current-book-el" books={books} />
      <Members className="member-el" members={members} />
      <Archive ref={archiveRef} className="archvive-el" books={books} />
    </div>
  );
}
