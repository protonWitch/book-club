import React, { forwardRef, useState } from "react";
import { ArchiveCard } from "./ArchiveCard";

export const Archive = forwardRef(({ books }, ref) => {
  const [sortBy, setSortBy] = useState("date");
  const [searchQuery, setSearchQuery] = useState("");

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchQuery(event.target.value.toLowerCase());
  }

  const filteredBooks = [...books]
    .filter((book) => book.isCurrent === 0)
    .sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "author") return a.author.localeCompare(b.author);
      if (sortBy === "date") return new Date(a.date) - new Date(b.date);
      if (sortBy === "member") return a.member.localeCompare(b.member);
      return 0;
    })
    .filter((book) => {
      return (
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery) ||
        book.member.toLowerCase().includes(searchQuery)
      );
    });

  return (
    <div className="archive" ref={ref}>
      <header className="header arch">ARCHIVE</header>

      <div className="archive-utilities">
        {/* Sort archive by title, author, date, or member */}
        <label htmlFor="archive-sort" className="archive-sort-label"></label>
        <select
          id="archive-sort"
          className="archive-sort"
          onChange={handleSortChange}
        >
          <option value="default">Sort by</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="date">Date</option>
          <option value="member">Member</option>
        </select>
        {/* Search archive by title, author, date, or member */}
        <label
          htmlFor="archive-search"
          className="archive-search-label"
        ></label>
        <input
          type="text"
          id="archive-search"
          className="archive-search"
          placeholder="Search archive..."
          onChange={handleSearchChange}
        ></input>
      </div>

      <ul className="archive-grid">
        {filteredBooks.map((book) => (
          <ArchiveCard book={book} key={book.title} />
        ))}
      </ul>
    </div>
  );
});
