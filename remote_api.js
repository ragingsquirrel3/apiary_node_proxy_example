var express = require("express");
var request = require("request");

// basic express app
var app = express();

// input api base from apiary
var apiUrl = "http://supermessagetest.apiary-mock.com/";

// pipe all requests at /api to apiary endpoint
app.use("/api", function(req, res) {
  url = apiUrl + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(3000);
