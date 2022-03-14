const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    const result = await mongoose.connect(
      "mongodb+srv://hanenn:hanen**04943214@cluster0.9tv0j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    console.log("database oumourah wadh7a 💕❤👍😍😘👍😊");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DBconnect;
