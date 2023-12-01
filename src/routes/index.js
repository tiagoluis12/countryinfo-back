const express = require("express");
const countriesRouter = require("./countriesRouter");

const router = express.Router();

router.use("/countries", countriesRouter);

module.exports = router;
