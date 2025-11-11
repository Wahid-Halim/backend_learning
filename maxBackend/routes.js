const fs = require("fs");

const handleRequest = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node.js server</title></head>");
    res.write(
      "<form action='message' method='POST'><input type='text' name='message' /> <button type='submit'>Submit</button></form>"
    );
    res.write("</html>");
    return res.end();
  }
  const body = [];
  if (url === "/message" && method === "POST") {
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node.js server</title></head>");
  res.write("<h1>Hello World! </h1>");
  res.write("</html>");
  res.end();
};

module.exports = handleRequest;
