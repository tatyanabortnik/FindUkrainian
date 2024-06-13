const mongoose = require('mongoose');

//TODO: review 'require' for all if pulling data from API (not mock)
//TODO: review openingHours type (Number) -> (String)
const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String, required: true },
  website: { type: String, required: true },
  openingHours: {
    Monday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
    Tuesday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
    Wednesday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
    Thursday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
    Friday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
    Saturday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
    Sunday: {
      open: { type: Number, required: true },
      close: { type: Number, required: true },
    },
  },
  contactInfo: String,
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  images: { type: [String], required: true },
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
