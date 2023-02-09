const name = require("../config/app").name;

// GET /
exports.index = (req, res, next) => {
  res.render("index", { title: name });
};