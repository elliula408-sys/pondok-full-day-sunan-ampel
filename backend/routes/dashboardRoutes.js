const express = require("express");
const router = express.Router();

const { getStatistik } = require("../controllers/dashboardController");

router.get("/statistik", getStatistik);

module.exports = router;
