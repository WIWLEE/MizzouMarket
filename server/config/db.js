// Making connection with DB

const mysql = require("mysql2");

const db = mysql.createConnection({
   host:     "localhost",
   user:     "root",
   password: "Lddqjsl0818!",
   database: "MIZZOUMARKET"
});

// MySQL connection confirm
db.connect(function(err) {
   if (err) {
      console.error("Error connecting to MySQL: " + err.stack);
      return;
   }
   console.log("Connected to MySQL as id " + db.threadId);
});

module.exports = db;