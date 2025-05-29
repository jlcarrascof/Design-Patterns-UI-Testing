const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const TIMEOUT_MS = 30000;           // Timeout de carga de página
const WAIT_BEFORE_QUIT_MS = 5000;   // Espera antes de cerrar el navegador

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--no-sandbox'))
    .build();

  try {
    await driver.manage().setTimeouts({ pageLoad: TIMEOUT_MS });
    await driver.get('https://the-internet.herokuapp.com/login');
    console.log('✅ Página cargada correctamente');

    // Esperar 5 segundos antes de cerrar
    await delay(WAIT_BEFORE_QUIT_MS);
  } catch (error) {
    console.error('❌ Error al cargar la página:', error);
  } finally {
    await driver.quit();
  }
})();
