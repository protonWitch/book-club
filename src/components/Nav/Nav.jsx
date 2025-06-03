import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { members } from "../../bookSample";

export function Nav({ archiveRef }) {
  function handleAddNewBook() {
    toast.info("Add New Book feature is coming soon... ish!", {
      position: "top-center",
    });
  }

  function handleArchive() {
    if (archiveRef.current) {
      archiveRef.current.scrollIntoView({ behavior: "smooth" }); // ✅ Scrolls to Archive
    }
  }

  function handleWhoIsNext() {
    const nextPerson = members.find((member) => member.isNext === 1);
    if (nextPerson) {
      toast.info(`${nextPerson.name} is next! 👹`, {
        position: "top-center",
      });
    } else {
      toast.error("💩", {
        position: "top-center",
      });
    }
  }

  return (
    <nav className="nav">
      <button onClick={handleAddNewBook} className="navButton">
        Add New Book
      </button>

      <button onClick={handleArchive} className="navButton">
        View Archive
      </button>

      <button onClick={handleWhoIsNext} className="navButton">
        Who Is Next?
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
    </nav>
  );
}
