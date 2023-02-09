const router = require("express").Router();
const landingController = require("../controllers/landing.controller");

/* GET Home Page. */
router.get("/", landingController.index);

module.exports = router;