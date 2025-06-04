const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "haha",
  password: "1526",
  database: "testdb",
});

db.connect((e) => {
  if (e) {
    console.error("Database connection error: " + e);
    return;
  }
  console.log("Database connected");
});

module.exports = db;
