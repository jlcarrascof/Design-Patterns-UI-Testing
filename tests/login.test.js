const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const PageFactory = require('./page.factory');

// Maximum timeout for the tests
const MAX_TIMEOUT = 30000;

describe('Testing of https://the-internet.herokuapp.com/login', () => {
  let driver;
  let loginPage;

  beforeAll(async () => {
    const serviceBuilder = new chrome.ServiceBuilder(chromedriver.path);
    const chromeOptions = new chrome.Options();

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(chromeOptions)
      .setChromeService(serviceBuilder) // <-- Este sí es un ServiceBuilder real
      .build();

      loginPage = PageFactory.createPage('login', driver);

      await loginPage.open();
  }, MAX_TIMEOUT);

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  test('Invalid login should show error', async () => {
    await loginPage.enterUsername('wronguser');
    await loginPage.enterPassword('wrongpass');
    await loginPage.clickLogin();

    const errorMsg = await loginPage.getErrorMessage();

    expect(errorMsg).toContain('Your username is invalid!');
  });

  test('Valid login should show success', async () => {
    await loginPage.enterUsername('tomsmith');
    await loginPage.enterPassword('SuperSecretPassword!');
    await loginPage.clickLogin();

    const securePage = PageFactory.createPage('secure', driver);
    const successMsg = await securePage.getFlashMessage();

    expect(successMsg).toContain('You logged into a secure area!');

    // Optional: close the session to clean up after the test
    await securePage.logout();
  });

});
