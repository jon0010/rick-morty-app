// const http = require('http');
// const getCharById = require('../controllers/getCharById');
// const getCharDetail = require('../controllers/getCharDetail');

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     let id = req.url.split('/').at(-1);

//     if(req.url.includes('onsearch')){
//         getCharById(res, id)
//     }

//     if(req.url.includes('detail')){
//         getCharDetail(res, id)
//     }

// }).listen(3001, 'localhost');

const express = require("express");
const app = express();
const axios = require("axios");

app.get("/rickandmorty/character/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = response.data;

    const infoCharacter = {
      id: data.id,
      name: data.name,
      species: data.species,
      gender: data.gender,
      image: data.image,
    };

    res.status(200).json(infoCharacter);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = app;
