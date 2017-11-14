/* 
Express web server index javascript
Author: Mark Rone
Date:   11.10.2017
Filename: index.js
 */
const express = require('express');
const app = express();
const url = require('url');
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
    console.log('/ handled the change to the home page');
});

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
    console.log('/home handled the change to the home page');
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + "/about.html"));
    console.log('/about handled the change to the about page');
});

app.listen(3000, () => console.log('Server Running'));



//https://startbootstrap.com/template-overviews/resume/