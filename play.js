//play.js

const { connect } = require('./client');
const { setupInput } = require('./input');
// const { handleUserInput } = require('./input');
console.log('Connecting ...');
connect();
setupInput();


//   const stdin = 
//   stdin.on('data', handleUserInput);
