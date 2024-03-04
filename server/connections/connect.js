const mongoose = require("mongoose");

//const connectionString = process.env.MONGODB_URI;

const connection = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://trivedirohit:C9zpeI2zgC6dONk9@cluster0.p2amiaz.mongodb.net/"
      )
      .then(() => {
        console.log("Connected Mongoose");
      });
  } catch (error) {
    res.status(400).json({message: "Not Connected"});
  }
};

connection();
