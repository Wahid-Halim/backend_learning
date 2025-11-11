const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node.js server</title></head>");
  res.write("<h1>Hello World! </h1>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
