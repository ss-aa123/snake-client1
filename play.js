const net = require("net");

// establishes a connection with the game server and returns an object
const connect = function () {
  const conn = net.createConnection({
    host:  localhost,
    port: 50541,
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log('Got your data')
  });  return conn;
};

console.log("Connecting ...");
connect();