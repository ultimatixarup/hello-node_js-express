var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('OCIO Pipline testing_Heran_3_29_2018');
});

app.listen(process.env.PORT || 3000);
