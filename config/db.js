const mysql = require("mysql2/promise"); // Note the /promise here
require("dotenv").config();

// Create the connection pool to MySQL database
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test the connection
pool
  .getConnection()
  .then((connection) => {
    console.log("Connected to MySQL successfully");
    connection.release();
  })
  .catch((err) => {
    console.error("Connection error:", err.stack);
  });

// Export the pool for use in other files
module.exports = { pool };
