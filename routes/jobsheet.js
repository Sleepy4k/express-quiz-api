const Router = require("express").Router();
const JobsheetController = require("../controllers/jobsheet");

Router.post("/one", JobsheetController.one);
Router.post("/many", JobsheetController.many);

module.exports = Router;
