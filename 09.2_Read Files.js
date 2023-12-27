/*
#__ Read Files __#

    fs.readFileSync(path[, options])
    fs.readFile(path[, options], callback)
       -The fs.readFile() method is used to read files on your computer.

*/

const fs = require("fs");
const buf_data = fs.readFileSync("file.txt")
console.log(buf_data)  // return buffer data , Buffer is mainly used to store binary data.

// Mtd:1
const fs = require("fs");
const buf1_data = fs.readFileSync("file.txt")
console.log(buf1_data.toString())  //Convert buffer data to string

// Mtd:2
const fs = require("fs");
const buf2_data = fs.readFileSync("file.txt", "utf8");
console.log(buf2_data)