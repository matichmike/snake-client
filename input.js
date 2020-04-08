let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = (input) => { // Do something based on user input
  if (input ===  '\u0003'){
    process.exit();
  }
  if (input === 'w') {
    connection.write("Move: up")
  }
  if (input === 's') {
    connection.write("Move: down")
  }
  if (input === 'a') {
    connection.write("Move: left")
  }
  if (input === 'd') {
    connection.write("Move: right")
  }
  if (input === 'q') {
    connection.write("Say: Hi there")
  }
  if (input === 'e') {
    connection.write("Say: Goodbye")
  }
  if (input === 'r') {
    connection.write("Say: I need a burger")
  }
};



module.exports = setupInput;