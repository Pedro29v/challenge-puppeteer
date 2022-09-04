const axios = require("axios");
const cheerio = require("cheerio");

const dataDolarBlue = {};

const getValuesCronista = async (url) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  dataDolarBlue.buy_price = $("td.buy").find(".buy-value").text().slice(1);

  dataDolarBlue.sell_price = $("td.sell").find(".sell-value").text().slice(1);

  dataDolarBlue.source = url;
  dataDolarBlue.name_page = "Cronista.com";

  return dataDolarBlue;
};

module.exports = { getValuesCronista };
