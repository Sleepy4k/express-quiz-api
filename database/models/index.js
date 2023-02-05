require("dotenv").config();

const Sequelize = require("sequelize");
const env = require("../../config/app").env;
const { development, test, production } = require("../../config/database");

const connection =
  env === "development" ? development : env === "test" ? test : production;

const sequelize = new Sequelize(
  connection.database,
  connection.username,
  connection.password,
  {
    host: connection.host,
    port: connection.port,
    dialect: connection.dialect,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
db.quiz = require("./quiz")(sequelize, Sequelize);
db.category = require("./category")(sequelize, Sequelize);
db.level = require("./level")(sequelize, Sequelize);

// Relations
db.quiz.belongsTo(db.category, { foreignKey: "categoryId" });
db.quiz.belongsTo(db.level, { foreignKey: "levelId" });
db.category.hasMany(db.quiz, { foreignKey: "categoryId" });
db.level.hasMany(db.quiz, { foreignKey: "levelId" });

module.exports = db;
