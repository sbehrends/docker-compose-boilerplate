const express = require('express');
const app = express();
// const MongoClient = require('mongodb').MongoClient;

const port = process.env.PORT;

app.get('/', function (req, res) {
  res.send('Hello Docker!');
});

app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});