const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const os = require("os");
const hostname = os.hostname();

let db;
const port = process.env.PORT;
MongoClient.connect(process.env.MONGO_HOST, (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(port, function () {
    console.log(`Listening on port ${port}!`);
  });

  // Some demo content
  const data = {
    name: 'Dr. Emmett Brown',
    text: 'Great Scott!'
  }

  db.collection('quotes').find({}, { limit: 1 }).toArray(function(err, results) {
    if (results.length === 0) {
      db.collection('quotes').save(data, (err, result) => {
        if (err) return console.log(err)
        console.log('Saved demo content')
      })
    }
  })
});

app.get('/', function (req, res) {
  db.collection('quotes').find({}, { limit: 1 }).toArray(function(err, results) {
    if (results.length === 0) {
      res.send(`Hello Docker! <br/> This is ${hostname}`);
      return;
    }
    res.send(`${results[0].text} <br/> This is ${hostname}`);
  });
});
