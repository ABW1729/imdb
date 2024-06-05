const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  shortDescription: String,
  image: String,
  longDescription: String
});

module.exports = mongoose.model('Movie', movieSchema);
