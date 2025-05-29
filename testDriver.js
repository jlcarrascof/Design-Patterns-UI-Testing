const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async () => {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--headless'))
    .build();

  await driver.get('https://the-internet.herokuapp.com/login');
  console.log('✅ Página cargada correctamente');
  await driver.quit();
})();
