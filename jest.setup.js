const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const TIMEOUT = 60000;

// Configuración global del driver
let driver;

beforeAll(async () => {
  const options = new chrome.Options()
  .addArguments('--headless')
  .addArguments('--no-sandbox')
  .addArguments('--disable-dev-shm-usage')
  .addArguments('--disable-gpu');

  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

    global.driver = driver;
}, TIMEOUT);

afterAll(async () => {
  if (driver) {
    await driver.quit();
  }
}, TIMEOUT);
