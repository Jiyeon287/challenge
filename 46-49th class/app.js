const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/currenttime', function (request, response){
  response.send("<h1>"+ new Date().toISOString() +"</h1>");

});

app.get('/', function (request, response){
  response.send('<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>');

});

app.post('/store-user', function(request, response){
  const userName = request.body.username;
  console.log(userName);

  //users.json 파일 경로 가져오기
  const filePath = path.join(__dirname, 'data', 'users.json');
  
  //users.json 파일 읽어들이기
  const fileData = fs.readFileSync(filePath);
  
  //users.json 내에 있는 유저들 이름 가져오기(TEXT -> JSON)
  const existingUsers = JSON.parse(fileData);
  
  //그 유저들에 New UserName 추가
  existingUsers.push(userName);

  //users.json 파일에 TEXT 형식으로 추가(JSON -> TEXT)
  fs.writeFileSync(filePath, JSON.stringify(existingUsers));


  response.send('<h1>Username stored!</h1>')
});
app.listen(3000);


