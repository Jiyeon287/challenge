const path = require("path");
const express = require("express");

const defaultRoutes = require('./routes/default');
const restaurantRoutes = require('./routes/restaurants');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use('/', defaultRoutes);
app.use('/', restaurantRoutes);



//그 어떤 링크가 존재하지 않을 때 여기까지 내려옴 -> 404 페이지를 찾을 수 없습니다.
app.use(function(req, res){
  res.status(404).render('404');
});

app.use(function(error, req, res){
  res.status(500).render('500');
});



app.listen(3000);
