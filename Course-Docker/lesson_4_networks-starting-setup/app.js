const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios').default;
const mongoose = require('mongoose');
const Favorite = require('./models/favorite');

const app = express();
app.use(bodyParser.json());

app.get('/favorites', async (req, res) => {
  const favorites = await Favorite.find();
  res.status(200).json({
    favorites: favorites,
  });
});

app.post('/favorites', async (req, res) => {
  const favoritesToAdd = Array.isArray(req.body) ? req.body : [req.body];
  const results = [];

  for (const fav of favoritesToAdd) {
    const favName = fav.name;
    const favType = fav.type;
    const favUrl = fav.url;

    try {
      if (favType !== 'movie' && favType !== 'character') {
        throw new Error('"type" should be "movie" or "character"!');
      }
      const existingFav = await Favorite.findOne({ name: favName });
      if (existingFav) {
        throw new Error('Favorite exists already!');
      }

      const favorite = new Favorite({
        name: favName,
        type: favType,
        url: favUrl,
      });

      await favorite.save();
      results.push({ 
        status: 'success', 
        message: 'Favorite saved!', 
        favorite: favorite.toObject() 
      });
    } catch (error) {
      results.push({ 
        status: 'error', 
        message: error.message, 
        name: favName 
      });
    }
  }

  res.status(200).json({ results });
});

app.get('/movies', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/films');
    res.status(200).json({ movies: response.data });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

app.get('/people', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/people');
    res.status(200).json({ people: response.data });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

mongoose.connect(
  'mongodb://mongo.internal.com:27017/swfavorites',
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(3000);
    }
  }
);