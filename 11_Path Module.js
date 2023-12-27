/*
#__ Path Module __#

   -The path module provides utilities for working with file and directory paths. 
   -The Node.js path module is used to handle and transform files paths.
   -It can be accessed using:
        const os = require('path');

*/

/*
path.basename(path[, ext])
   -The path.basename() method returns the last portion of a path, similar to the Unix basename command. 
   -path <string>
   -Returns: <string>

*/
const path = require('path');
console.log(path.basename("A:/Programming/Javascript/NodeJs/11_Path Module.js"));
console.log(path.basename("A:/Programming/Javascript/NodeJs/11_Path Module.js", ".js"));

/*
path.dirname(path)
   -The path.dirname() method returns the directory name of a path.
   -path <string>
   -Returns: <string>

*/

const path = require('path');
console.log(path.dirname("A:/Programming/Javascript/NodeJs/11_Path Module.js"));

/*
path.extname(path)
   -The path.extname() method returns the extension of the path.
   -path <string>
   -Returns: <string>
   -A TypeError is thrown if path is not a string.
*/
const path = require('path');
console.log(path.extname("A:/Programming/Javascript/NodeJs/11_Path Module.js"));

/*
path.parse(path)
   -The path.parse() method returns an object whose properties represent significant elements of the path. 
   -The returned object will have the following properties:
      dir <string>
      root <string>
      base <string>
      name <string>
      ext <string>
*/

const path = require('path');
let parse = path.parse("A:/Programming/Javascript/NodeJs/11_Path Module.js");
console.log(parse);
console.log("..........");
console.log(parse.root);
console.log("..........");
console.log(parse.name);


/*
path.format(pathObject)
   -The path.format() method returns a path string from an object. 
   -This is the opposite of path.parse().
   -pathObject <Object> 
   -Returns: <string>
   -Any JavaScript object having the following properties:
      dir <string>
      root <string>
      base <string>
      name <string>
      ext <string>

*/

const path = require('path');
let format = path.format({ dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' });
console.log(format);

/*
path.isAbsolute(path)
   -The path.isAbsolute() method determines if path is an absolute path.
   -path <string>
   -Returns: <boolean>
   -If the given path is a zero-length string, false will be returned.
   -A TypeError is thrown if path is not a string.

*/
const path = require('path');
console.log(path.isAbsolute('/foo/bar')); // true
console.log(path.isAbsolute('/baz/..'));  // true
console.log(path.isAbsolute('qux/'));     // false
console.log(path.isAbsolute('.'));        // false

/*
path.join([...paths])
   -The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
   -...paths <string> A sequence of path segments
   -Returns: <string>

*/
const path = require('path');
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

/*
path.normalize(path)
   -The path.normalize() method normalizes the given path, resolving '..' and '.' segments.
   -path <string>
   -Returns: <string>
*/

var path = require('path');
var x = path.normalize('Users/Refsnes/../Jackson');
console.log(x);