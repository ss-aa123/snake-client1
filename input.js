const { messages, moves } = require("./constants");

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
if (moves[key]) {
  connection.write(moves[key]);
}
if (messages[key]) {
  connection.write(messages[key]);
}
  
};

module.exports = {
  setupInput
};
