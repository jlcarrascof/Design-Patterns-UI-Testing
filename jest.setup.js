const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const TIMEOUT = 30000; // Tiempo de espera para las pruebas

// Configuración global del driver
let driver;

beforeAll(async () => {
  console.log("Inicializando WebDriver... 🚀");

  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options()
    .addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage') // ✅ Corrección
)   .build();

  console.log("WebDriver inicializado correctamente. 🐾");
  // Hacer driver disponible globalmente
  global.driver = driver;
}, TIMEOUT);

afterAll(async () => {
  if (global.driver) {
    await global.driver.quit();
  }
}, TIMEOUT);
