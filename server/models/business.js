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

// {
//     "name": "Ukrainian Delight",
//     "address": "Hohenzollernring 123, 50672 Köln",
//     "category": "Restaurants",
//     "description": "Authentic Ukrainian cuisine with a modern twist.",
//     "contactInfo": "555-1234",
//     "coordinates": {
//       "lat": 50.9396,
//       "lng": 6.9415
//     },
//     "images": ["https://example.com/images/restaurant1.jpg"]
//   },
