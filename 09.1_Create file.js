/*
#__ Create Files __#

    - The File System module has methods for creating new files:

        fs.writeFileSync(fileName, data[, options])
        fs.writeFile(file, data[, options], callback)  
           -The fs.writeFile() method replaces the specified file and content if it exists. 
           -If the file does not exist, a new file, containing the specified content, will be created.  


        fs.appendFileSync(path, data[, options])
        fs.appendFile(path, data[, options], callback)
           -The fs.appendFile() method appends specified content to a file. 
           -If the file does not exist, the file will be created.

        
        fs.open(path[, flags[, mode]], callback)
           -The fs.open() method takes a "flag" as the second argument.
           -If the file does not exist, an empty file is created.


*/
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/ 
// Mtd:1

//Sync
const fs = require("fs");
//Creating a new file
fs.writeFileSync("file.txt",'Hello.....This is Ankit Singh');
//Overwite the first one
fs.writeFileSync("file.txt","Hello  This is Ankit Singh. I'm computer science & Engineering Student");

//Async
var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('File is Created!');
});

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/ 
// Mtd:2

//Sync
const fs = require("fs");
fs.appendFileSync("file1.txt",'Hello.....This is Ankit Singh. ');
fs.appendFileSync("file1.txt",'I am Cse student');

//Async
var fs = require('fs');
fs.appendFile('mynewfile2.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Task Complated!');
});