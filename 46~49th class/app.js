const userName = "jykim";
console.log(userName);

const http = require("http");

function handleRequest(request, response) {
  if (request.url === "/cureenttime") {
    response.statusCode = 200;
    response.end("<h1>"+ new Date().toISOString() +"</h1>");
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1>Hello World!</h1>");
  }
}

const server = http.createServer(handleRequest);

server.listen(3000);

//3000포트의 서버를 리슨
