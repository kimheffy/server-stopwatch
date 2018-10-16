// DUMMY SERVER
const http = require('http');
const express = require('express');
const sw = require('./server-stopwatch');
const { performance } = require('perf_hooks');
const bodyParser = require('body-parser');

const app = express();
const stopwatch = new sw();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

stopwatch.listen(server, {
  url: '/yes',
  method: 'GET',
});

function validateUser(req, res, next) {
  next();
}

function fib(num) {
  if (num === 0 || num === 1) return num;
  return fib(num - 2) + fib(num - 1);
}

const _validateUser = performance.timerify(validateUser);
const _fib = performance.timerify(fib);

app.post('/', _validateUser, (req, res) => {
  console.log('hitting');
  console.log(req.body.number);
  let result = _fib(req.body.number);
  res.send({ number: result });
});

app.get('/no', (req, res) => {
  const _reverse = performance.timerify(reverse);
  res.send(_reverse('hello'));
});


server.listen(3000, () => console.log('listening on port 3000'));
