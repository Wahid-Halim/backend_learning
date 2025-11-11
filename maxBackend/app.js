const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node.js server</title></head>");
    res.write(
      "<form action='message' method='POST'><input type='text' name='message' /> <button type='submit'>Submit</button></form>"
    );
    return res.write("</html>");
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "Dummy message");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node.js server</title></head>");
  res.write("<h1>Hello World! </h1>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
