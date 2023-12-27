/*
#__ Creates a directory __#

    fs.mkdir(path[, options], callback)
        Asynchronously creates a directory.
 
    fs.mkdtemp(prefix[, options], callback)
        Creates a unique temporary directory.
 
    fs.mkdirSync(path[, options])
        Synchronously creates a directory.

*/

const fs = require("fs");
fs.mkdirSync("Create")


/*
#__ Delete a Directory __#

    fs.rmdir(path[, options], callback)
    fs.rmdirSync(path[, options])

    fs.rm(path[, options], callback)
       -Asynchronously removes files and directories 
       
*/