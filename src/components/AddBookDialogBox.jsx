import { Modal, Box } from "@mui/material";
import { BookForm } from "./BookForm";

export function AddBookDialogBox({ open, setOpen }) {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={{ p: 4, bgcolor: "white", borderRadius: 2 }}>
        <div className="work-in-progress">Hey! I'm walkin' here!</div>
        <img src="Covers/WorkInProgress.jpg" alt="caution-sign" />
        {/* <BookForm></BookForm> */}
        <button onClick={() => setOpen(false)}>Close</button>
      </Box>
    </Modal>
  );
}
