const movies=require("../testData")
const mongoose = require('mongoose');
const Movie = require('../models/Movie');
mongoose.connect('mongodb://localhost:27017/imdb-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



Movie.insertMany(movies)
  .then(() => {
    console.log("Db updated");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
