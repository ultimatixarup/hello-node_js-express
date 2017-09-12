var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Testing Heroku Pipline');
});

app.listen(process.env.PORT || 3000);
