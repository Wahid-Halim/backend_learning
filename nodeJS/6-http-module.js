const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home page");
    return;
  }
  if (req.url === "/about") {
    res.end("About Page");
    return;
  }

  res.end(`
        <h1>Opss</h1>
        <p>We can not found the page you looking for </p>
        <a href="/">back to home</a>
        `);
});

server.listen(5000);
