/*
#__ OS Module __#

   -The os module provides operating system-related utility methods and properties. 
   -It can be accessed using:
        const os = require('os');

*/


/*
os.arch()
   -Returns the operating system CPU architecture for which the Node.js binary was compiled. 
   -Possible values are 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64'.
*/
const os = require('os');
console.log(os.arch())

/*
os.constants
   -<Object>
   -Contains commonly used operating system-specific constants for error codes, process signals, and so on. 
   -The specific constants defined are described in OS constants.
*/
const os = require('os');
console.log(os.constants)

/*
os.cpus()
   -Returns: <Object[]>
   -Returns an array of objects containing information about each logical CPU core.
   -The properties included on each object include:
       model <string>
       speed <number> (in MHz)
       times <Object>
            user <number> The number of milliseconds the CPU has spent in user mode.
            nice <number> The number of milliseconds the CPU has spent in nice mode.
            sys <number> The number of milliseconds the CPU has spent in sys mode.
            idle <number> The number of milliseconds the CPU has spent in idle mode.
            irq <number> The number of milliseconds the CPU has spent in irq mode.
*/
const os = require('os');
console.log(os.cpus())

/*
os.freemem()
   -Returns: <integer>
   -Returns the amount of free system memory in bytes as an integer.
*/
const os = require('os');
console.log(os.freemem());
let memory = os.freemem();
console.log(`${memory/1024/1024/1024} Gb`);

/*
os.homedir()
   -Returns: <string>
   -Returns the string path of the current user's home directory.
*/
const os = require('os');
console.log(os.homedir());

/*
os.hostname()
   -Returns: <string>
   -Returns the host name of the operating system as a string.
*/
const os = require('os');
console.log(os.hostname());

/*
os.networkInterfaces()
   -Returns: <Object>
   -Returns an object containing network interfaces that have been assigned a network address.
   -Each key on the returned object identifies a network interface. 
   -The associated value is an array of objects that each describe an assigned network address.
*/
const os = require('os');
console.log(os.networkInterfaces());

/*
os.tmpdir()
   -Returns: <string>
   -Returns the operating system's default directory for temporary files as a string.
*/
const os = require('os');
console.log(os.tmpdir());

/*
os.totalmem()
   -Returns: <integer>
   -Returns the total amount of system memory in bytes as an integer.
*/
const os = require('os');
console.log(os.totalmem());
let memory1 = os.totalmem();
console.log(`${memory1/1024/1024/1024} Gb`);


/*
os.type()
   -Returns: <string>
   -Returns the operating system name as returned by uname(3). 
   -For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
*/
const os = require('os');
console.log(os.type());

/*
os.userInfo([options])
   -Returns information about the currently effective user. 
   -The returned object includes the username, uid, gid, shell, and homedir. 
   -On Windows, the uid and gid fields are -1, and shell is null.
*/
const os = require('os');
console.log(os.userInfo());


/*
os.version()
   -Returns <string>
   -Returns a string identifying the kernel version
*/
const os = require('os');
console.log(os.version());
