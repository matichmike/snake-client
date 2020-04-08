const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
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