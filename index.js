require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const key = process.env.KEY;
const cors = require("cors");

app.use(cors());

app.use(express.static("public"));

app.get("/api/key", (req, res) => {
  res.send(key);
});

app.get("/app.js", (req, res) => {
  res.sendFile(__dirname + "/public/app.js");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
