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
    
    conn.on('connect', () => {
       conn.write("Name: Pinky & Brain") ;
      });

    // conn.on('connect', () => {
    //    conn.write("Move: up") ;
    //    });

    // conn.on('connect', () => {
    //    setInterval(() => {
    //        conn.write("Move: left")}, 50) ;
    //    });

    // conn.on('connect', () => {
    //     setTimeout(() => {
    //         conn.write("Move: down")}, 1000) ;
    //     });
    
    // conn.on('connect', () => {
    //     setTimeout(() => {
    //         conn.write("Move: right")}, 1500) ;
    //         });

    return conn;
}

module.exports.connect = connect


    





    
