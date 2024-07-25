require('dotenv').config()

const mongoose = require('mongoose')
const dbName = process.env.DB_NAME
const connectionString = process.env.MONGODB_URI
console.log(connectionString)

async function connectDB() {
  try {
    await mongoose.connect(`${connectionString}/${dbName}`)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(`Error connecting to MongoDB', ${error}`)
  }
}

module.exports = { connectDB, connectionString }
