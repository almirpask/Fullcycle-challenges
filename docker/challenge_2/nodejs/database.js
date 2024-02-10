const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "docker_challange",
});

module.exports.connection = connection;
