const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MSQL_PASSWORD,
  database: process.env.MSQL_DATABASE,
});

module.exports = connection;