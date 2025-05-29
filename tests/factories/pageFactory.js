const LoginPage = require('../pages/loginPage');
const SecurePage = require('../pages/securePage');

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
