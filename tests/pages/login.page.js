const { By, until } = require('selenium-webdriver');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://the-internet.herokuapp.com/login';
    this.usernameInput = By.id('username');
    this.passwordInput = By.id('password');
    this.loginButton = By.css('button[type="submit"]');
    this.errorMessage = By.id('flash');
  }

  async open() {
    await this.driver.get(this.url);
  }

  async enterUsername(username) {
    await this.driver.findElement(this.usernameInput).sendKeys(username);
  }

  async enterPassword(password) {
    await this.driver.findElement(this.passwordInput).sendKeys(password);
  }

  async clickLogin() {
    await this.driver.findElement(this.loginButton).click();
  }

  async getErrorMessage() {
    const el = await this.driver.wait(until.elementLocated(this.errorMessage), 5000);
    return await el.getText();
  }
}

module.exports = LoginPage;
