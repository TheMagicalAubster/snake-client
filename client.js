const net = require('net');

const connect = function() {
    const conn = net.createConnection({ 
        host: '135.23.222.148',
        port: 50541
    });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 

    conn.on('connect', () => {
      console.log('Connected to game server');
    });
    
    conn.on('connect', (name = 'Name: ABP') => {
       console.log('Sending Name: ', name) ;
      });
    return conn;
}

module.exports.connect = connect


    





    
