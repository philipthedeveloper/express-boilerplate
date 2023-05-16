const mongoose = require("mongoose");

module.exports = connectDB = async (callback) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the database...");
    callback();
  } catch (error) {
    console.log(error);
  }
};
