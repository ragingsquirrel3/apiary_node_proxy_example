var express = require('express');
var request = require('request');

var app = express();

var apiUrl = "http://supermessagetest.apiary-mock.com/";

app.use('/api', function(req, res) {
  url = apiUrl + req.url;
  console.log("url: ", req.url);
  req.pipe(request(url)).pipe(res);
});

app.listen(3000);
