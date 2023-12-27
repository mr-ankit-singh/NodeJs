/*
#__ HTTP Module __#

   -The HTTP core module is a key module to Node.js networking.
   -The HTTP module provides a way of making Node.js transfer data over HTTP (Hyper Text Transfer Protocol).
   -Syntax:
        var http = require('http');

   -The HTTP module provides 5 classes:
        http.Agent
        http.ClientRequest
        http.Server
        http.ServerResponse
        http.IncomingMessage

*/
/*+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+*/
// Require http module
const http = require('http')
//Create server
http.createServer((req, res) => {
    res.writeHead(200, { 'Contenet-Type': 'application\json' });
    res.write(JSON.stringify({ 'Name': 'Ankit singh', 'Email': 'ankitsingh@gmail.com' }))
    res.end()
}).listen(5000);

/*+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+*/

const http = require('http')

const server = http.createServer((req, res) => {
    res.end("Hello we created own server")
});

server.listen(8000, () => { console.log("Listening at port 8000...") })









