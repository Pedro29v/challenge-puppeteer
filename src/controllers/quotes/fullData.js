const { getValuesCronista } = require("./cronistaDolarBlue");
const { getValuesDolarHoy } = require("./dolarhoyDolarBlue");
const { getValuesAmbito } = require("../quotes/ambitoDolarBlue");
const { dataAverage } = require("../average/dataAverage");
const { dataSlippage } = require("../slippage/slippage");

const urlCronista =
  "https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB";
const urlDolarHoy = "https://www.dolarhoy.com";

const allData = async () => {
  try {
    const quotes = [];

    const respCronista = await getValuesCronista(urlCronista);
    quotes.push(respCronista);
    const respDolarHoy = await getValuesDolarHoy(urlDolarHoy);
    quotes.push(respDolarHoy);
    const respAmmbito = await getValuesAmbito();
    quotes.push(respAmmbito);

    const average = dataAverage(quotes);
    const { average_buy_price, average_sell_price } = average;
    const slippage = dataSlippage(
      quotes,
      average_buy_price,
      average_sell_price
    );

    const allData = {
      quotes,
      average,
      slippage,
    };

    return allData;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { allData };
