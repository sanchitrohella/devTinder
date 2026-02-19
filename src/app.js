const express = require("express");

const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("User Data Sent!!!");
});

app.get("/admin/getData", (req, res) => {
  res.send("Admin Data Send !!!");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Admin User Deleted!!!");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777...");
});
