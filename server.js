const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  let data = {
    nama: "hadi",
    alamat: "blgarut",
  };

  res.send(data);
});

app.listen(port, () => {
  console.log("server running on http://localhost:5000");
});
