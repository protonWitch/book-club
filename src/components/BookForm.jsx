import React, { useState } from "react";

export function BookForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    pages: "",
    meetingDate: "",
    member: "",
    password: "",
  });

  const validateData = (form) => {
    const { title, author, pages, meetingDate, member, password } = form;

    // password validation
    if (password !== "1") {
      alert("Incorrect password. Please try again.");
      return false;
    }

    //title validation
    if (!title || !author || !pages || !meetingDate || !member) {
      alert("All fields are required.");
      return false;
    }

    //page number validation
    if (isNaN(pages) || pages <= 0) {
      alert("Pages must be a positive number.");
      return false;
    }

    //date validation
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!datePattern.test(meetingDate)) {
      alert("Meeting date must be in MM/DD/YYYY format.");
      return false;
    }
    // Member validation
    const validMembers = [
      "monika",
      "shannon",
      "rylei",
      "kevin",
      "peter",
      "derek",
    ];

    if (!validMembers.includes(form.member.toLowerCase())) {
      alert(
        "Member must be one of the following: Monika, Shannon, Rylei, Kevin, Peter, Derek."
      );
      return false;
    }

    return true;
  };

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    const validData = validateData(formData);

    if (validData) {
      fetch("https://localhost:5000/data/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Server response:", data);
          alert("Form data saved to backend!");
        })
        .catch((error) => console.error("Error submitting form:", error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Pages:
        <input
          type="text"
          name="pages"
          value={formData.pages}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Meeting Date:
        <input
          type="text"
          name="meetingDate"
          placeholder="MM/DD/YYYY"
          value={formData.meetingDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Member:
        <input
          type="text"
          name="member"
          value={formData.member}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Psst... what's the password? 🤐
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
}
