const puppeteer = require("puppeteer");

async function getValuesAmbito() {
  /*   const browser = await puppeteer.launch();
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();
  await page.goto("https://www.ambito.com/contenidos/dolar.html", {
    timeout: 0,
  }); */
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://www.ambito.com/contenidos/dolar.html");

  const buyPrice = await page.$eval(".data-compra", (e) => e.innerText);
  const sellPrice = await page.$eval(".data-venta", (e) => e.innerText);

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
