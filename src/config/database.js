const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sanchitrohella_db_user:sz3IawGhYqEq6uoL@sancdev.95joxts.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
