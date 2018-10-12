const http = require('http');
// const express = require('express');
const sw = require('./lib/stopwatch');

const stopwatch = new sw();

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.end('elllo');
  }, 4000);
  // res.end('ello');
});

server.listen(9090, () => {
  console.log('listening to port 9090');
});

stopwatch.capture(server);
