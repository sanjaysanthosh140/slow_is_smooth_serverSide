const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.connect("mongodb+srv://sanjaykrishna038:mO1fxSmpmRsMFxbC@cluster0.aztv7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/prodWeb").then((data: Object) => {
      !data
        ? console.log("connection fail")
        : console.log("connection successfull");
    });
  } catch (error) {
    console.log(error);
  }
};

connectDB();