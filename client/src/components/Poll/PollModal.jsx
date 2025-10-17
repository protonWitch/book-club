import { useState } from "react";

export function PollModal({ onClose }) {
  const [memberId, setMemberId] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);

  const handleVote = async () => {
    const res = await fetch("/poll/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ memberId, votes: selectedDates }),
    });
    const result = await res.json();
    alert(result.message);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Vote for Meeting Dates</h2>
      <input
        type="text"
        placeholder="Enter your member ID"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
      />
      <div>
        {["2024-06-11", "2024-07-25", "2024-08-15"].map((date) => (
          <label key={date}>
            <input
              type="checkbox"
              value={date}
              checked={selectedDates.includes(date)}
              onChange={(e) => {
                const checked = e.target.checked;
                setSelectedDates((prev) =>
                  checked ? [...prev, date] : prev.filter((d) => d !== date)
                );
              }}
            />
            {date}
          </label>
        ))}
      </div>
      <button onClick={handleVote}>Submit Vote</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
