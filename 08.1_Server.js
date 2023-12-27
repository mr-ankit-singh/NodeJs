var http = require('http'); // Import Node.js core module
var fs = require('fs')

let urlUser = "https://jsonplaceholder.typicode.com/users";

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/student") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/admin") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    }
    else if(req.url == "/users") {
        res.writeHead(200 , { 'Content-Type' : 'application.json'})
        fs.readFile(`${__dirname}/users.json`,'utf-8',(err , data)=>{ console.log(data)})
        res.write(JSON.parse("users.json"))
        res.end()
    }
    else
        res.end('Invalid Request!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')