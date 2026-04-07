const http = require("http");

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("OK");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("UP on " + PORT);
});
