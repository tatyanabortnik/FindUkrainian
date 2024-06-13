const mongoose = require('mongoose');
const dbName = 'find_ukrainian'; //TODO: move to config file
const connectionString = 'mongodb://127.0.0.1:27017'; //TODO: move to config - make dynamic with .env

async function connectDB() {
  try {
    await mongoose.connect(`${connectionString}/${dbName}`);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(`Error connecting to MongoDB', ${error}`);
  }
}

module.exports = { connectDB, connectionString }; //TODO: remove connectionString - export from config
