const { Router } = require("express");
const {
  sentAllData,
  average,
  sentDataSlippage,
} = require("../controllers/allData/sentAllData");
const { cache } = require("../controllers/cache/cache");

const router = Router();

router.get("/quotes", cache, sentAllData);
router.get("/average", cache, average);
router.get("/slippage", cache, sentDataSlippage);

module.exports = { router };
