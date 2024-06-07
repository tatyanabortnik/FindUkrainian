const mongoose = require('mongoose');
const dbName = 'find_ukrainian';

async function connectDB() {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(`Error connecting to MongoDB', ${error}`);
  }
}

module.exports = connectDB;
