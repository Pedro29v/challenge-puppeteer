const dataAverage = (quotes) => {
  let buyPrice = 0;
  let sellPrice = 0;

  quotes.map((e) => {
    buyPrice += parseFloat(e.buy_price);
    sellPrice += parseFloat(e.sell_price);
  });

  const totalBuyPrice = buyPrice / quotes.length;
  const totalSellPrice = sellPrice / quotes.length;

  const averageResults = {
    average_buy_price: totalBuyPrice.toFixed(2),
    average_sell_price: totalSellPrice.toFixed(2),
  };

  return averageResults;
};

module.exports = { dataAverage };
