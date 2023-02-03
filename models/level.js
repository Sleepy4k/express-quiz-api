const Level = (sequelize, DataTypes) => {
  return sequelize.define("level", {
    name: {
      type: DataTypes.STRING,
      validate: { notEmpty: { msg: "Level must not be empty" } },
    },
  });
};

module.exports = Level;
