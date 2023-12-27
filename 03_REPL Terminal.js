/*
#__ REPL Terminal __#

   -REPL stands for Read Eval Print Loop.
   -Node.js or Node comes bundled with a REPL environment. 
   -The REPL feature of Node is very useful in experimenting with Node.js codes and to debug javascript codes.
   -The REPL session provides a convenient way to quickly test simple JavaScript code.
   
    Read − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
    Eval − Takes and evaluates the data structure.
    Print − Prints the result.
    Loop − Loops the above command until the user presses ctrl-c twice.

  Starting REPL
   -REPL can be started by simply running node on shell/console without any arguments.
   -Syntax:
        $ node

  Underscore Variable : You can use underscore (_) to get the last result.

  REPL Commands
      ctrl + c         − terminate the current command.
      ctrl + c twice   − terminate the Node REPL.
      ctrl + d         − terminate the Node REPL.
      Up/Down Keys     − see command history and modify previous commands.
      tab Keys         − list of current commands.
      .help            − list of all commands.
      .exit            - Exit the REPL
      .editor          - Enter editor mode
      .break           − exit from multiline expression.
      .clear           − exit from multiline expression.
      .save filename   − save the current Node REPL session to a file.
      .load filename   − load file content in current Node REPL session.

*/