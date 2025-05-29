const LoginPage = require('../pages/loginPage.js');
const SecurePage = require('../pages/securePage.js');

class PageFactory {
  constructor(driver) {
    this.driver = driver;
  }

  createLoginPage() {
    return new LoginPage(this.driver);
  }

  createSecurePage() {
    return new SecurePage(this.driver);
  }
}

module.exports = PageFactory;
