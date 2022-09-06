const axios = require("axios");
const cheerio = require("cheerio");

async function getValuesAmbito() {
  const { data } = await axios.get(
    "https://mercados.ambito.com//dolar/informal/variacion"
  );

  const dataDolarBlue = {
    buy_price: data.compra,
    sell_price: data.venta,
    source: "https://www.ambito.com/contenidos/dolar.html",
    name_page: "Ambito.com",
  };
  console.log(dataDolarBlue);
  return dataDolarBlue;
}

module.exports = { getValuesAmbito };
