const express = require("express");
const connectDB = require("./config/database");

const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "virat@kohli.com",
    password: "Virat@123",
  };
  //Creating a new instance of the User model and saving it to the database.
  const user = new User(userObj);
  try {
    await user.save();
    res.send("User signed up successfully!!!");
  } catch (err) {
    res.status(400).send("Error signing up user: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("DB connected successfully!!!");
    app.listen(7777, () => {
      console.log("Server is running on port 7777...");
    });
  })
  .catch((err) => {
    console.log("DB connection failed!!!");
    console.log(err);
  });
