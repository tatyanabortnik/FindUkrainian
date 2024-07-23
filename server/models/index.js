require('dotenv').config()
// console.log(process.env.NODE_ENV)

const mongoose = require('mongoose')
const dbName = 'find_ukrainian'

const connectionString =
  process.env.NODE_ENV === 'prod'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017'

async function connectDB() {
  try {
    await mongoose.connect(`${connectionString}/${dbName}`)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(`Error connecting to MongoDB', ${error}`)
  }
}

module.exports = { connectDB, connectionString }
