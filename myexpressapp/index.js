const express = require("express");
const app = new express();

app.get("/", (req, res) => {
  res.send("Welcome to the express server");
});

app.listen(3333, () => {
  console.log(`Listening at http://localhost:3333`);
});
