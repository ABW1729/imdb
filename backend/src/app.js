const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const movieRoutes = require('./routes/movies');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/imdb-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/movies', movieRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});