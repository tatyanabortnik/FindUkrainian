// seed.js
//TODO: review location of seed file

const { connectionString } = require('./index.js');

const mongoose = require('mongoose');
const Business = require('./business');
const Categories = require('./categories');
const seedData = require('./mockBusiness'); //TODO: rename to seedBusiness / review location of mock data
const seedCategories = require('./mockCategories.js'); //TODO: review location of mock data

//FIXME: do we need to remove the console logs here -> if its only use for dev?
const seedDB = async () => {
  const dbName = 'find_ukrainian'; //TODO: pull from config file

  try {
    // Connect to MongoDB
    await mongoose.connect(`${connectionString}/${dbName}`); //TODO: review the path -> place in config file

    // Clear the database
    await Business.deleteMany({});
    console.log('Business collection cleared');
    await Categories.deleteMany({});
    console.log('Categories collection cleared');

    // Insert the seed data
    await Business.insertMany(seedData);
    console.log('Business collection seeded');
    console.log(seedData);
    await Categories.insertMany(seedCategories);
    console.log('Categories collection seeded');
    console.log(seedCategories);

    // Close the connection
    mongoose.connection.close();
    console.log('Connection closed');
  } catch (err) {
    console.error(err);
  }
};

seedDB(); //TODO: make an iife
