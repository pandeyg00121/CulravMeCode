const express = require("express");
const { application } = require("express");
const app = express();

// app.use("/public", express.static(__dirname + "/public"))
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(1347, () => {
  console.log("The server is up and running at 1347!");
});