// http module have createServer funtion that has one callback function of paramater request and response

const http = require("http");
const data = require("../json/index");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  // res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/") {
    // console.log(data)
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("HI")
    // res. (JSON.parse(data));

    // console.log(__dirname)
    console.log(req.method)
  res.writeHead(200, { "Content-Type": "application/json" });

    fs.readFile(`${__dirname}/fakeJson.js`, "utf-8", (err, data) => {
      if (err) return console.log("Error");
    //   console.log(data);

    res.end(data)
    });
  } else {
    res.writeHead(404).end("NOt FOund");
  }
});

server.listen(9261, () => {
  console.log("Server up an running");
});
