import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Define a basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Prayer Request Management System");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
