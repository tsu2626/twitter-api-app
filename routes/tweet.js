var express = require('express');
var router = express.Router();

const twitter = require("twitter");
const fs = require("fs");

const client = new twitter(JSON.parse(fs.readFileSync("secret.json","utf-8")));

client.post('statuses/update', {status: 'test'}, (error, tweet, response) => {
  if (!error) {
    console.log(tweet);
  } else {
    console.log('error');
  }
});