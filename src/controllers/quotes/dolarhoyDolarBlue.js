const axios = require("axios");
const cheerio = require("cheerio");

const dataDolarBlue = {};

const getValuesDolarHoy = async (url) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  dataDolarBlue.buy_price = $(".tile.is-parent.is-5")
    .find(".compra .val")
    .text()
    .slice(1);

  dataDolarBlue.sell_price = $(".tile.is-parent.is-5")
    .find(".venta .val")
    .text()
    .slice(1);

  dataDolarBlue.source = url.toString();
  dataDolarBlue.name_page = "DolarHoy.com";

  return dataDolarBlue;
};

module.exports = { getValuesDolarHoy };
