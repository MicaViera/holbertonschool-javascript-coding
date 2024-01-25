#!/usr/bin/node

const request = require('request');
const url_request = process.argv[2];
request.get(url_request, (err, response) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('code:', response.statusCode);
});
