const LoginPage = require('../pages/loginPage.js');
const SecurePage = require('../pages/securePage.js');

class PageFactory {
  constructor(driver) {
    this.driver = driver;
  }

/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Creates an instance of the LoginPage class, passing the driver
   * that was passed to the PageFactory constructor.
   *
   * @returns {LoginPage} a new instance of LoginPage
   */
/*******  99edc79a-cbfa-457f-8131-707bb6d4bbd3  *******/
  createLoginPage() {
    return new LoginPage(this.driver);
  }

  createSecurePage() {
    return new SecurePage(this.driver);
  }
}

module.exports = PageFactory;
