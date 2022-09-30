'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.get('/kannan', function (req, res) {
    res.send('Hello kannan\n');
});

app.get('/upahar', function (req, res) {
res.send('Hello upahar\n');
});

app.get('/anand', function (req, res) {
  res.send('Hello anand\n');
  });

app.get('/ayush', function (req, res) {
    res.send('Hello anand\n');
    });

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);