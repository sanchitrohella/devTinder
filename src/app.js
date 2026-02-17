const express = require("express");

const app = express();

// app.use("/user", (req, res) => {
//   res.send("Hello About From the Server...");
// });

app.get("/user/:userId", (req, res) => {
  console.log(req.params);
  res.send("Get User Data From the Server...");
});

app.post("/user", (req, res) => {
  res.send("Post User Data to the Server...");
});

app.delete("/user", (req, res) => {
  res.send("Delete User Data from the Server...");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777...");
});
