const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: String,
  address: String,
  category: String,
  description: String,
  longDescription: String,
  website: String,
  openingHours: {
    Monday: String,
    Tuesday: String,
    Wednesday: String,
    Thursday: String,
    Friday: String,
    Saturday: String,
    Sunday: String,
  },
  contactInfo: String,
  coordinates: {
    lat: Number,
    lng: Number,
  },
  images: [String],
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
