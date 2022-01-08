const http = require("http");
const fs = require('fs');

http.createServer((req, res) => {
    const hello = fs.readFileSync("index.html", "utf-8");
    res.end(hello);
}).listen(3000);