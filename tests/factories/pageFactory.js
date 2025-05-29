const LoginPage = require('../pages/LoginPage.js');
const SecurePage = require('../pages/SecurePage.js');

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
