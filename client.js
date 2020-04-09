const net = require('net');
const {IP, PORT} = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  })
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    // conn.write("Move: up");
    // setInterval(() => {
    //   conn.write("Move: right");
    // }, 100)
  });

  conn.on('connect', () => {
    conn.write('Name: MSH');
  });

  conn.on('data', (kickoutMsg) => {
  console.log(kickoutMsg);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

module.exports = connect;