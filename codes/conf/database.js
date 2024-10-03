//---- LOCAL TESTING ----
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: '',
//   user: 'root',
//   database: 'artisanAura',
//   password: '',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// }).promise();

// module.exports = pool;

// ---- WEB TESTING ----
const mysql = require('mysql2');

const pool = mysql.createPool({
  
  host:'localhost',
  user:'root',
  database: 'artisanaura',
  password: '',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 100,
  idleTimeout: 60000,
  queueLimit: 0,
}).promise();

module.exports = pool;