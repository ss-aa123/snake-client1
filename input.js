const { connect } = require("http2");
const { createConnection } = require("net");

// Stores the active TCP connection object.
let connection; 

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    handleUserInput(key);
  });


  return stdin;
};


const handleUserInput = function (key) {
  const stdout = process.stdout;
  if (key === '\u0003') {
    process.exit();
  }
  //HOW TO GET THESE TO WORKKKKKKK
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }

  if (key === 'q') {
    connection.write("Say: Thanks for playing!")
  }
  if (key === 'z') {
    connection.write("Say: Good Job!")
  }
};

module.exports = {setupInput};
