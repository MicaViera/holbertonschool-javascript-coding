#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filepath = process.argv[3];
request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  }
  const data = body;
  fs.writeFile(filepath, data, err => {
    if (err) {
      console.log(err);
    }
  });
});
