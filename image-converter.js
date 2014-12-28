#!/usr/bin/env node

var path = require("path");
var commander = require("commander");
var request = require("request");
var getPixels = require("get-pixels");
var uuid = require("uuid");
var util = require('util'), exec = require('child_process').exec, child;
var pkg = require( path.join(__dirname, "package.json"));
var imagePath;

commander
  .version('0.0.1')
  .option("-u, --url <url>", "Image Url")
  .parse(process.argv)

if (!commander.url){

  // If the user does not give a url, throw the help menu
  commander.help();
} else {

  // Get the users temp directory to store the image
  var tmp = process.env.TMPDIR;
  var urlArray = commander.url.split(".");
  var fileEnding = urlArray[urlArray.length - 1];
  dirPath = tmp + "cli-image-viewer/" + uuid.v1() + "/";
  imagePath = dirPath + "userImage." + fileEnding;

  // Import the image into the new file
  child = exec('curl -sSo ' + imagePath + ' ' + commander.url + " --create-dirs ", function(error, stdout, stderr){
    if (error){

      // If there is an error report it immediately
      console.log("bash says: " + error);
    } else if (stderr){

      // If there is not error and no stdout, print out the stderr
      console.log("curl failed: " + stderr); 

    } else {

      // If there is stdout, make sure to also tell the user about any stderr
      if (stderr){
        console.log("curl says: " + stderr);
      }

      // Show the user where the image was saved
      console.log("Image saved at " + imagePath);

      // Get pixel data from the saved image
      getPixels(imagePath, function(error, pixels){
        console.log("getPixels says:");
        if (error){
          console.log(error);
        } else {
          console.log(pixels);
        }
      });
    }
  });
}


