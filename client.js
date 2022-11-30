
const net = require("net");

// establishes a connection with the game server and returns an object
const connect = function () {
  const conn = net.createConnection({
    host:  'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to a game server!')
    conn.write('Name: SAM')
  });  

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};


module.exports = {connect};