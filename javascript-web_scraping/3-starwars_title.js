#!/usr/bin/node

const request = require('request');
const API = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];
request(API, function(err, response, body) {
    if (err) {
        console.log(err);
    }
    const movie = JSON.parse(body);
    console.log(movie.title);
});
