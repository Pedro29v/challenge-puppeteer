const dataSlippage = (quotes, averageBuy, averageSell) => {
  const allSlippage = [];

  quotes.map((e) => {
    const firsBuyValue = parseFloat(e.buy_price) - parseFloat(averageBuy);
    const buySlippage = (firsBuyValue * 100) / parseFloat(e.buy_price);

    const firstSellValue = parseFloat(e.sell_price) - parseFloat(averageSell);
    const sellSlippage = (firstSellValue * 100) / parseFloat(e.sell_price);

    const date = {
      buy_price_slippage: buySlippage.toFixed(2),
      sell_price_slippage: sellSlippage.toFixed(2),
      source: e.source,
      name_page: e.name_page,
    };

    allSlippage.push(date);
  });

  return allSlippage;
};

module.exports = { dataSlippage };
