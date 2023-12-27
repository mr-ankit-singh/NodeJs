/*
#__ Module Wrapper Function __#               
' 
'   -NodeJS does not run our code directly, 
'   -It wraps the entire code inside a function before execution. 
'   -This function is termed as Module Wrapper Function. 
' 
'   -NodeJS wraps it with a function wrapper that has the following structure:
'        (function (exports, require, module, __filename, __dirname) {
'          //module code
'        });
' 
'     Arguments	        Description
'     exports	            It refers to module.exports which are shorter to types.
'     requires(id)	    The parameter is a string that refers to the module name or path.
'     module	            It implies the current module that is executed.
'     __filename	        It implies the file name of the current module.
'     __dirname	        It refers to the directory name of the current module.
'    
'   -The variables and functions in the node.js are private to the module that has it. 
'   -The variables and functions inside the module are private and not visible to the outside. 
'   -The variables and functions are made private in node.js using the node.js module wrapper function.
' 
*/
/*+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+*/

console.log(arguments)

/*+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+*/

(function(exports, require, module, __filename, __dirname){
    const name = "Ankit Singh"
    console.log(name)
})();
console.log(__filename)
console.log(__dirname)


/*+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+*/
// variables and functions in the node.js are private to the module that has it.

(function(exports, require, module, __filename, __dirname){
    const name = "Ankit Singh"
    console.log(name)
})();
console.log(name)  // Gives ReferenceError: name is not defined

/*+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+*/