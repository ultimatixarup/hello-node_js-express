var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello, Ken');
});

app.listen(process.env.PORT || 3000);
