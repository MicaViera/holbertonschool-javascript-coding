#!/usr/bin/node

const request = require('request');
const API = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;
request.get(API, (err, response) => {
  if (err) {
    console.log(err);
  }
  const movie = JSON.parse(response.body);
  console.log(movie.title);
});
