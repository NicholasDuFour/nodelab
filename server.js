"use strict";
const http = require("http");
const quotes = require("./quotes");

http.createServer((request, response)=> {
  // console.log("The server is running on port 3000.");
  response.writeHead(200, {
    "Content-type": "text/plain"
  });
  response.write(quotes());
  response.end();
}).listen(3000);
