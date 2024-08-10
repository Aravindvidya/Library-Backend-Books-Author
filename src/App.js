const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to database");
  }
);

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
