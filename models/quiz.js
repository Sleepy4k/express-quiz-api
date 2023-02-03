export default function (sequelize, DataTypes) {
  return sequelize.define("quiz", {
    question: {
      type: DataTypes.STRING,
      validate: { notEmpty: { msg: "Question must not be empty" } },
    },
    a: {
      type: DataTypes.STRING,
    },
    b: {
      type: DataTypes.STRING,
    },
    c: {
      type: DataTypes.STRING,
    },
    d: {
      type: DataTypes.STRING,
    },
    answer: {
      type: DataTypes.STRING,
      validate: { notEmpty: { msg: "Answer must not be empty" } },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      validate: { notEmpty: { msg: "Category must not be empty" } },
    },
    levelId: {
      type: DataTypes.INTEGER,
      validate: { notEmpty: { msg: "Level must not be empty" } },
    },
  });
}
