const { webkit } = require("playwright");

async function getValuesAmbito() {
  const browser = await webkit.launch();
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();
  await page.goto("https://www.ambito.com/contenidos/dolar.html", {
    timeout: 0,
  });

  const buyPrice = await page.textContent(".data-compra");
  const sellPrice = await page.textContent(".data-venta");

  const dataDolarBlue = {
    buy_price: buyPrice,
    sell_price: sellPrice,
    source: "https://www.ambito.com/contenidos/dolar.html",
    name_page: "Ambito.com",
  };

  await browser.close();
  return dataDolarBlue;
}

module.exports = { getValuesAmbito };
