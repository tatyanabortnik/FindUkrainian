const mongoose = require('mongoose');
const dbName = 'find_ukrainian';
const connectionString = 'mongodb://127.0.0.1:27017';

async function connectDB() {
  try {
    await mongoose.connect(`${connectionString}/${dbName}`);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(`Error connecting to MongoDB', ${error}`);
  }
}

module.exports = { connectDB, connectionString };
