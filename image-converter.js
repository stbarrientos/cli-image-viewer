#!/usr/bin/env node

var path = require("path");
var express = require("express");
var pkg = require( path.join(__dirname, "package.json"));
var bodyParser = require('body-parser');
var target;

if (process.argv[2]){
   target = process.argv[2];
} else {
  console.log("\n\nUsage: cli-image-viewer [url]\n\nExample: cli-image-viewer http://www.survivingcollege.com/wp-content/uploads/2014/10/grumpycat.jpg\n\n");
  target = "No target specified";
}

var port = 3000;
var app = express();

app.use("/", express.static(path.join(__dirname, 'frontend')));

app.get("/image", function(req,res) {
  res.json(target);
  console.log("target: " + target);
});

app.post("/converter", bodyParser.json(), function(req,res) {
  console.log(req.body)
  res.json("{message: 'you hit me!'}");
});

app.listen(port);
console.log("Listening on port " + port);
