const router = require("express").Router();
const jobsheetController = require("../controllers/jobsheet.controller");

/* POST one listing. */
router.post("/one", jobsheetController.one);

/* POST many listing. */
router.post("/many", jobsheetController.many);

module.exports = router;
