require("dotenv").config();

const mongoose = require("mongoose");
const dbName = process.env.DB_NAME;
const connectionString = process.env.MONGODB_URI;
async function connectDB() {
  try {
    // If using MongoDB Atlas (mongodb+srv), the connection string already contains the database name
    // For local MongoDB (mongodb://localhost), append the database name
    const fullConnectionString =
      connectionString.includes("mongodb+srv") ? connectionString : (
        `${connectionString}/${dbName}`
      );

    await mongoose.connect(fullConnectionString);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`);
  }
}

module.exports = { connectDB, connectionString };
