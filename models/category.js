const Category = (sequelize, DataTypes) => {
  return sequelize.define("category", {
    name: {
      type: DataTypes.STRING,
      validate: { notEmpty: { msg: "Category must not be empty" } },
    },
  });
};

module.exports = Category;
