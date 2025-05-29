const { Builder } = require('selenium-webdriver');
const PageFactory = require('./page.factory');

describe('The Internet Login Tests - POM + Factory', () => {
  let driver;
  let loginPage;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    loginPage = PageFactory.createPage('login', driver);
    await loginPage.open();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('Invalid login should show error', async () => {
    await loginPage.enterUsername('wronguser');
    await loginPage.enterPassword('wrongpass');
    await loginPage.clickLogin();
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Your username is invalid!');
  });
});
