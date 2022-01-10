const http = require("http");
const fs = require('fs');

const data = fs.readFileSync('index.html');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(data);
})

server.listen(3000, () => {
    console.log("Listening on Port 3000")
});