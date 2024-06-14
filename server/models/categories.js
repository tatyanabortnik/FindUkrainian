const mongoose = require('mongoose');

//TODO: review the 'require' for the UK hardcoded translation
//Resolution: seed data requires this schema to remain unchanged.

const categorySchema = new mongoose.Schema({
  //TODO: remove _id -> adjust related functionality
  //resolution: Schema will remain unchanged.
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
