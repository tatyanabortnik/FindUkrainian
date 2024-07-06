const { connectionString } = require('./index.js')

const mongoose = require('mongoose')
const Business = require('./business')
const Categories = require('./categories')
const seedData = require('./mockBusiness')
const seedCategories = require('./mockCategories.js')

const seedDB = async () => {
  const dbName = 'find_ukrainian'

  try {
    // Connect to MongoDB
    await mongoose.connect(`${connectionString}/${dbName}`)

    // Clear the database
    await Business.deleteMany({})
    console.log('Business collection cleared')
    await Categories.deleteMany({})
    console.log('Categories collection cleared')

    // Insert the seed data
    await Business.insertMany(seedData)
    console.log('Business collection seeded')
    console.log(seedData)
    await Categories.insertMany(seedCategories)
    console.log('Categories collection seeded')
    console.log(seedCategories)

    // Close the connection
    mongoose.connection.close()
    console.log('Connection closed')
  } catch (err) {
    console.error(err)
  }
}

seedDB()
