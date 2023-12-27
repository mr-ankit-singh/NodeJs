/*
#__ Node.js Modules __#

   -Consider modules to be the same as JavaScript libraries.
   -A set of functions you want to include in your application.
   -Node.js has a set of built-in modules which you can use without any further installation.

 Include Modules
   -To include a module, use the require() function with the name of the module.
   -Syntax:
        var module_name = require("module_name");

   Note:Use the exports keyword to make properties and methods available outside the module file.

*/

var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
}).listen(8080);
