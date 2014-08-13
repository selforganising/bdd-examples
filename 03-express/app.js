var express = require('express'),
    path = require('path');
    app = express();

app.get('/', function(req, res) {
  res.send('Hello, Camden Town');
});

module.exports = app;
