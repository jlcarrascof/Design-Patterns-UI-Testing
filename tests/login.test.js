const PageFactory = require('./factories/pageFactory.js');

describe('Login Tests', () => {
  let pageFactory;

  beforeAll(() => {
    pageFactory = new PageFactory(global.driver); // driver está disponible globalmente
  });

  test('should login successfully with valid credentials', async () => {
    const loginPage = pageFactory.createLoginPage();
    await loginPage.open();

    const securePage = await loginPage.login('tomsmith', 'SuperSecretPassword!');
    const flashMessage = await securePage.getFlashMessage();

    expect(flashMessage).toContain('You logged into a secure area!');

    await securePage.logout();
  });

  test('should show error with invalid credentials', async () => {
    const loginPage = pageFactory.createLoginPage();
    await loginPage.open();

    await loginPage.login('invalid', 'invalid');
    const flashMessage = await loginPage.getFlashMessage();

    expect(flashMessage).toContain('Your username is invalid!');
  });
});
