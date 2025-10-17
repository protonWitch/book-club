import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddBookDialogBox } from "../AddBookDialogBox";
import { useState } from "react";
import { PollModal } from "../Poll/PollModal";

export function Nav({ archiveRef, members }) {
  const [addBookDialogOpen, setAddBookDialogOpen] = useState(false);
  const [showPollModal, setShowPollModal] = useState(false);

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
      <AddBookDialogBox></AddBookDialogBox>

      <button onClick={() => setAddBookDialogOpen(true)} className="navButton">
        Add New Book
      </button>

      <button onClick={handleArchive} className="navButton">
        View Archive
      </button>

      <button onClick={handleWhoIsNext} className="navButton">
        Who Is Next?
      </button>

      <button onClick={() => setShowPollModal(true)}>Meeting Date Poll</button>
      {showPollModal && <PollModal onClose={() => setShowPollModal(false)} />}

      <AddBookDialogBox
        open={addBookDialogOpen}
        setOpen={() => setAddBookDialogOpen(false)}
      />

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
