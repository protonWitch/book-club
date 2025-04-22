export function Nav() {
  function handleAddNewBook() {}

  function handleArchive() {}

  function handleWhoIsNext() {}

  return (
    <nav  className="nav">
      <button onClick={handleAddNewBook} className="navButton">
        Add New Book
      </button>

      <button onClick={handleArchive} className="navButton">
        View Archive
      </button>

      <button onClick={handleWhoIsNext} className="navButton">
        Who Is Next?
      </button>
    </nav>
  );
}
