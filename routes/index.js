const router = require("express").Router();

/* RESOURCE landing. */
router.use("/", require("./landing"));

/* RESOURCE quiz. */
router.use("/api/quiz", require("./quiz"));

/* RESOURCE jobsheet. */
router.use("/api/jobsheet", require("./jobsheet"));

module.exports = router;
