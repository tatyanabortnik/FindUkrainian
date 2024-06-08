// seed.js
const { connectionString } = require('./index.js');

const mongoose = require('mongoose');
const Business = require('./business');
const seedData = require('./mockBusiness');

const seedDB = async () => {
  const dbName = 'find_ukrainian';

  try {
    // Connect to MongoDB
    await mongoose.connect(`${connectionString}/${dbName}`);

    // Clear the database
    await Business.deleteMany({});
    console.log('Database cleared');

    // Insert the seed data
    await Business.insertMany(seedData);
    console.log('Database seeded');
    console.log(seedData);

    // Close the connection
    mongoose.connection.close();
    console.log('Connection closed');
  } catch (err) {
    console.error(err);
  }
};

seedDB();
