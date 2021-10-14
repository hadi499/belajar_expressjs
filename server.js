const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", function (req, res) {
  res.sendFile("./about.html", { root: __dirname });
});

app.listen(port, () => {
  console.log("server running on http://localhost:5000");
});
