const express = require('express');

const app = express();

app.get('/currenttime', function (request, response){
  response.send("<h1>"+ new Date().toISOString() +"</h1>");

})

app.get('/', function (request, response){
  response.send("<h1>Hello World!</h1>");

})

app.listen(3000);


