const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(cors());
app.use(bodyParser.json());

const bookFilePath = "./data/books.json";
const memberFilePath = "./data/members.json";
// Path to the JSON file
const fileMapping = {
  books: bookFilePath,
  members: memberFilePath,
};

// Read existing data
const getData = (dataType) => {
  const filePath = fileMapping[dataType];
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  }
  console.log(`File not found at ${filePath}. Returning empty array.`);
  return [];
};

// Route to get all data
app.get("/data/books", (req, res) => {
  const data = getData("books");
  const ip = req.ip; // Get the client's IP address
  console.log(`Request received from IP: ${ip}`);
  console.log(data);
  res.json(data);
});

app.get("/data/members", (req, res) => {
  const data = getData("members");
  const ip = req.ip; // Get the client's IP address
  console.log(`Request received from IP: ${ip}`);
  console.log(data);
  res.json(data);
});

// Route to add new data
app.post("/data/books", (req, res) => {
  const filePath = fileMapping.books;
  const data = getData("books");
  const id = data.length > 0 ? data[data.length - 1].id + 1 : 1; // Generate a new ID
  req.body.id = id; // Assign the new ID to the request body
  data.push(req.body);
  console.log(`Adding new book data: ${JSON.stringify(req.body)}`);

  // fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ message: "Data saved successfully", data });
});

// // Route to update existing data
// app.put("/data/:index", (req, res) => {
//   const data = getData();
//   const index = parseInt(req.params.index);

//   if (index >= 0 && index < data.length) {
//     data[index] = req.body;
//     fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
//     res.json({ message: "Data updated successfully", data });
//   } else {
//     res.status(404).json({ message: "Invalid index" });
//   }
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
