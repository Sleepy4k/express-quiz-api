require("dotenv").config();

const database = {};

database.host = process.env.DB_HOST || "localhost";
database.user = process.env.DB_USER || "root";
database.password = process.env.DB_PASSWORD || "";
database.table = process.env.DB_DATABASE || "quizapi";
database.dialect = process.env.DB_CONNECTION || "mysql";
database.pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
};

module.exports = database;
