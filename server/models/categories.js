const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  //TODO: remove _id -> adjust related functionality
  //Resolution: Need to fix funtion in controller.
  _id: {
    type: String,
    required: true,
  },
  name: {
    en: {
      type: String,
      required: true,
    },
    uk: {
      type: String,
      required: true,
    },
  },
  description: {
    en: {
      type: String,
      required: true,
    },
    uk: {
      type: String,
      required: true,
    },
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
