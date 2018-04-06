var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Test_4_6_2018');
});

app.listen(process.env.PORT || 3000);
