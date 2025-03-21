const path = require('path');

const express = require('express');

const app = express();

app.get('/', function(){
    const htmlFilePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(htmlFilePath);
});

app.get('/restaurants', function(req, res){
    const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html');
    res.sendFile(htmlFilePath);
});

app.get('/confirm', function(req, res){
    const htmlFilePath = path.join(__dirname, 'views', 'confirm.html');
});

app.get('/about', function(req, res){
    const htmlFilePath = path.join(__dirname,'views', 'about.html')
});

app.listen(3000);

