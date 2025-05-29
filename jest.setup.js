const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Configuración global del driver
let driver;

beforeAll(async () => {
  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options()
    .addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage') // ✅ Corrección
)   .build();

  // Hacer driver disponible globalmente
  global.driver = driver;
}, 30000);

afterAll(async () => {
  if (global.driver) {
    await global.driver.quit();
  }
}, 30000);
