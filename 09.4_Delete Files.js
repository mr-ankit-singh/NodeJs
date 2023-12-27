/*
#__ Delete Files __#

   -To delete a file with the File System module,  use the fs.unlink() method.
   -The fs.unlink() method deletes the specified file.
   -Syntax: 
        fs.unlinkSync(path)
        fs.unlink(path, callback)

*/

const fs = require("fs");

fs.unlinkSync("readwrite.txt")