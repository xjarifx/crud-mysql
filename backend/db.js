require("dotenv").config();
const mysql = require("mysql2");
const fs = require("fs");
const path = require("path");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    ca: fs.readFileSync(path.join(__dirname, process.env.DB_SSL_CA_PATH)),
    rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === "true",
  },
});

db.connect((e) => {
  if (e) {
    console.error("Database connection error: " + e);
    return;
  }
  console.log("Database connected");
});

module.exports = db;
