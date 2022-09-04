const { allData } = require("../quotes/fullData");

const sentAllData = async (req, res) => {
  try {
    const { quotes } = await allData();
    console.log("hola");
    return res.json(quotes);
  } catch (error) {
    console.error(error);
  }
};

const average = async (req, res) => {
  try {
    const { average } = await allData();
    return res.json(average);
  } catch (error) {
    console.error(error);
  }
};

const sentDataSlippage = async (req, res) => {
  try {
    const { slippage } = await allData();
    return res.json(slippage);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sentDataSlippage, sentAllData, average };
