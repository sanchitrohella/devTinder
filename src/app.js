const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  try {
    throw new Error("dfhafhjahf");
    res.send("Admin User Deleted!!!");
  } catch (err) {
    res.status(500).send("Something Went Wrong. Please contact Support Team.");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    //Log Error message
    res.status(500).send("Something Went Wrong!!!");
  }
});

app.listen(7777, () => {
  console.log("Server is running on port 7777...");
});
