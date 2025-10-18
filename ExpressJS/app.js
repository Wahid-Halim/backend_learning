const http = require("http");
const fs = require("fs");
const path = require("path");

// Create server
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to Wahid's Node.js Server</h1>");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h1>About Page</h1><p>This is a basic server using HTTP module.</p>"
    );
  } else if (req.url === "/file" && req.method === "GET") {
    const filePath = path.join(__dirname, "content", "sample.txt");

    // Use stream to send file
    const readable = fs.createReadStream(filePath, "utf8");
    readable.on("open", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      readable.pipe(res); // Pipe file content to response
    });
    readable.on("error", (err) => {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
    });
  }
  // Route: Not found
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

// Start server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
