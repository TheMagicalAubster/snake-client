const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
    // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Connected to game server');
  });
    
  conn.on('connect', () => {
    conn.write("Name: P&B");
  });

  return conn;
};

module.exports.connect = connect;


    





    
