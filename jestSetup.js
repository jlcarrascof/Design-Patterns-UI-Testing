const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const TIMEOUT = 60000;

let driver;

beforeAll(async () => {
  try {
    console.log("🟡 Iniciando configuración de Chrome...");
    const options = new chrome.Options();
    // Puedes volver a agregar flags si hace falta:
    // options.addArguments('--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu');

    console.log("🟡 Creando instancia del driver...");
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    console.log("✅ Driver creado con éxito");
    global.driver = driver;
  } catch (err) {
    console.error("❌ Error en beforeAll:", err);
    throw err; // Asegura que Jest falle visiblemente
  }
}, TIMEOUT);

afterAll(async () => {
  try {
    if (driver) {
      console.log("🟡 Cerrando el driver...");
      await driver.quit();
      console.log("✅ Driver cerrado");
    }
  } catch (err) {
    console.error("❌ Error al cerrar el driver:", err);
  }
}, TIMEOUT);
