// let http = require('http')
// let fs = require('fs')
// let url = require('url')
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', function(req, res) {
    console.log(path)
  res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact', function(req, res) {
    console.log(path)
  res.sendFile(path.join(__dirname, '/contact-me.html'));
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '/404.html'));
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);
