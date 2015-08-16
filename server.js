
var express = require('express');
var app = express();
var rpn = require('./rpn.js');

app.get(/^\/input\/(\d+)$/, function(req, res) {
  var number = parseInt(req.params[0]);
  rpn.receive(number);
  res.send('okay');
});

app.get(/^\/input\/(add|subtract|multiply|divide)$/, function(req, res) {
  var operator = req.params[0];
  var result = rpn.receive(operator);
  res.send(result.toString());
});

app.use('/', express.static('./html'));
app.use('/js', express.static('./js'));

app.listen(8080);

