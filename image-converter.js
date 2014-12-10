#!/usr/bin/env node

//var program = require("commander")

//program
//  .version("0.0.1")
//  .option("-u, --url", "Go To Url")
//  .parse(process.argv)

if (process.argv[2]){
  console.log("I will go there. " + process.argv[2]);
} else {
  console.log("\n\nUsage: cli-image-viewer [url]\n\nExample: cli-image-viewer http://www.survivingcollege.com/wp-content/uploads/2014/10/grumpycat.jpg\n\n");
}

