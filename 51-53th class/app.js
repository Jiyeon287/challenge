const path = require("path");
const fs = require("fs");
const express = require("express");
const uuid = require('uuid');

const resData = require('./util/restaurant-data');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index");
});

const router = express.Router();

app.get("/restaurants", function (req, res) {
  const storedRestaurants = resData.getStoredRestaurants();

  storedRestaurants.sort(function(resA, resB){
    if(resA.name > resB.name){
      return 1
    }
    return -1

  });
  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants
  });
});

app.get('/restaurants/:id', function (req, res){ 
  //디테일 페이지 : restaurants/[restaurantID]
  const restaurantId = req.params.id;
  const storedRestaurants = resData.getStoredRestaurants();

  for (const restaurant of storedRestaurants) {
    console.log(restaurant.id);
    if(restaurant.id === restaurantId) {
      return res.render('restaurant-detail', {restaurant: restaurant});
    }
  }

  res.status(404).render('404');

});

app.get("/confirm", function (req, res) {
  res.render("confirm");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/recommend", function (req, res) {
  res.render("recommend");
});

app.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4(); //자바스크립트는 기존에 존재하지 않는 속성을 불러오면 자동으로 생성하는 기능을 가짐
  const storedRestaurants = resData.getStoredRestaurants();
  storedRestaurants.push(restaurant);
  resData.storeRestaurants(storedRestaurants);
  console.log("dd");
  res.redirect("/confirm");
});

//그 어떤 링크가 존재하지 않을 때 여기까지 내려옴 -> 404 페이지를 찾을 수 없습니다.
app.use(function(req, res){
  res.status(404).render('404');
});

app.use(function(error, req, res, next){
  res.status(500).render('500');
});



app.listen(3000);
