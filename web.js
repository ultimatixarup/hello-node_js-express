var express = require('express');
var app = express();

app.get('/testthis', function (req, res) {
  res.send('Testing app');
});

app.listen(process.env.PORT || 3000);
