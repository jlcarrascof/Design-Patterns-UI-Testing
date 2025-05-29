const { By } = require('selenium-webdriver');
const LoginPage = require('./loginPage');

class SecurePage {
  constructor(driver) {
    this.driver = driver;
    this.logoutButton = By.css('a.button.secondary.radius');
    this.flashMessage = By.id('flash');
  }

  async logout() {
    await this.driver.findElement(this.logoutButton).click();
    return new LoginPage(this.driver);
  }

  async getFlashMessage() {
    return await this.driver.findElement(this.flashMessage).getText();
  }
}

module.exports = SecurePage;
