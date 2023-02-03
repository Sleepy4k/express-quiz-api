import Sequelize from 'sequelize';
import database from '../config/database';

const sequelize = new Sequelize(config.table, database.user, database.password, {
  host: database.host,
  dialect: database.dialect,
  pool: database.pool,
});

const db = {};

db.Sequelize = Sequelize; // Sequelize is a class
db.sequelize = sequelize; // sequelize is an instance of Sequelize

// Models/tables
db.quiz = require('./quiz')(sequelize, Sequelize);
db.category = require('./category')(sequelize, Sequelize);
db.level = require('./level')(sequelize, Sequelize);

// Relations
db.quiz.belongsTo(db.category, { foreignKey: 'categoryId' });
db.quiz.belongsTo(db.level, { foreignKey: 'levelId' });

export default db;
