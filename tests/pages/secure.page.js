const { By } = require('selenium-webdriver');
class SecurePage {
  constructor(driver) {
    this.driver = driver;
    this.flashMessage = By.id('flash');
    this.logoutButton = By.css('a[href="/logout"]');
  }

  async getFlashMessage() {
    const el = await this.driver.findElement(this.flashMessage);
    return el.getText();
  }

  async logout() {
    const el = await this.driver.findElement(this.logoutButton);
    await el.click();
  }
}

module.exports = SecurePage;
