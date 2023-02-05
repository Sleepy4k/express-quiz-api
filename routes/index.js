const Router = require("express").Router();
const name = require("../config/app").name;

/* GET home page. */
Router.get("/", function (req, res, next) {
  res.render("index", { title: name });
});

Router.use("/api/quizzes", require("./quiz"));
Router.use("/api/jobsheet", require("./jobsheet"));

module.exports = Router;
