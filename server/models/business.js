const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String, required: true },
  website: { type: String, required: true },
  openingHours: {
    Monday: {
      open: { type: Number, default: null, required: true },
      close: { type: Number, default: null, required: true },
    },
    Tuesday: {
      open: { type: Number, default: null, required: true },
      close: { type: Number, default: null, required: true },
    },
    Wednesday: {
      open: { type: Number, default: null, required: true },
      close: { type: Number, default: null, required: true },
    },
    Thursday: {
      open: { type: Number, default: null, required: true },
      close: { type: Number, default: null, required: true },
    },
    Friday: {
      open: { type: Number, default: null, required: true },
      close: { type: Number, default: null, required: true },
    },
    Saturday: {
      open: { type: Number, default: null, required: true },
      close: { type: Number, default: null, required: true },
    },
    Sunday: {
      open: { type: Number, default: null, required: true },
      close: { type: Number, default: null, required: true },
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
