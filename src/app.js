const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello World From the Server...");
});

app.use("/about", (req, res) => {
  res.send("Hello About From the Server...");
});
app.listen(7777, () => {
  console.log("Server is running on port 7777...");
});
