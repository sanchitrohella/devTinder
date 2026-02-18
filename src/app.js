const express = require("express");

const app = express();

//Multiple Route Handlers
//app.use("Route", [Middleware1, Middleware2, Middleware3, Middleware4]);

app.use("/user", [
  (req, res, next) => {
    console.log("Getting User Data from the Server...");
    next();
    // res.send("User Data from the Server...");
  },
  (req, res, next) => {
    console.log("2nd User Data sent from the Server...");
    // res.send("2nd User Data sent from the Server...");
    next();
  },
  (req, res, next) => {
    console.log("3rd User Data sent from the Server...");
    // res.send("3rd User Data sent from the Server...");
    next();
  },
  (req, res, next) => {
    console.log("4th User Data sent from the Server...");
    res.send("4th User Data sent from the Server...");
    next();
  },
]);

app.listen(7777, () => {
  console.log("Server is running on port 7777...");
});
