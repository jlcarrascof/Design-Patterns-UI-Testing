const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async () => {
  const options = new chrome.Options();
  // options.addArguments('--headless'); // puedes quitar esta línea para ver Chrome

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  await driver.get('https://the-internet.herokuapp.com/login');
  console.log("✅ Página cargada correctamente");

  await driver.quit();
})();
