const mongoose = require('mongoose');
const {dbName,connectionString} = require('../config.js')


async function connectDB() {
  try {
    await mongoose.connect(`${connectionString}/${dbName}`);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(`Error connecting to MongoDB', ${error}`);
  }
}

module.exports = { connectDB }; 
