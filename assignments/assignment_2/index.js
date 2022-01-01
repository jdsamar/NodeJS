const http = require("http");
var fs = require('fs');

fs.writeFile("index.html", `<h1>Hello World</h1>`, (err) =>{
    console.log(err);
});

http.createServer(function (req,res){
    res.write(fs.readFileSync("index.html", "utf-8"));
    res.end();
}).listen(5000);
