const { By } = require('selenium-webdriver');
const SecurePage = require('./securePage');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://the-internet.herokuapp.com/login';
    this.usernameInput = By.id('username');
    this.passwordInput = By.id('password');
    this.submitButton = By.css('button[type="submit"]');
    this.flashMessage = By.id('flash');
  }

  async open() {
    await this.driver.get(this.url);
    return this;
  }

  async login(username, password) {
    await this.driver.findElement(this.usernameInput).sendKeys(username);
    await this.driver.findElement(this.passwordInput).sendKeys(password);
    await this.driver.findElement(this.submitButton).click();
    return new SecurePage(this.driver);
  }

  async getFlashMessage() {
    return await this.driver.findElement(this.flashMessage).getText();
  }
}

module.exports = LoginPage;
