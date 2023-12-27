/*
#__ Rename Files __#

   -The fs.rename() method renames the specified file.
   -Syntax:
        fs.rename(oldPath, newPath, callback)
        fs.renameSync(oldPath, newPath)

*/

const fs = require("fs");
fs.renameSync("file1.txt","readwrite.txt")