const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();

// EJS setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", indexRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});