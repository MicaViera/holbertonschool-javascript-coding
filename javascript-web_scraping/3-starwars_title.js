#!/usr/bin/node

const request = require('request');
const objId = process.argv[2];
const API = 'https://swapi-api.hbtn.io/api/films/' + objId;
request.get(API, (err, response) => {
    if (err) {
        console.log(err);
    }
    const movie = JSON.parse(response.body);
    console.log(movie.title);
});
