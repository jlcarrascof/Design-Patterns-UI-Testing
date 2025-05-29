const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Configuración global del driver
let driver;

beforeAll(async () => {
  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options()
      .headless() // Para ejecución en CI
      .addArguments('--no-sandbox', '--disable-dev-shm-usage')
    )
    .build();

  // Hacer driver disponible globalmente
  global.driver = driver;
}, 30000);

afterAll(async () => {
  if (driver) {
    await driver.quit();
  }
}, 30000);
