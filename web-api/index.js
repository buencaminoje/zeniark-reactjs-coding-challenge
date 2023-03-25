const express = require("express");
const cors = require("cors");
const app = express();

const questions = require("../mock-data/questions.json");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/questions", function (req, res) {
  res.json(questions.results);
});

try {
  app.listen(3001);
  console.log("API Server Listening to Port 3001");
} catch (err) {}
