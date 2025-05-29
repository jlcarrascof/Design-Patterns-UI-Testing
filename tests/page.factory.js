const LoginPage = require('./pages/login.page');
const SecurePage = require('./pages/secure.page');

class PageFactory {
  static createPage(pageName, driver) {
    switch(pageName) {
      case 'login':
        return new LoginPage(driver);
      case 'secure':
        return new SecurePage(driver);
      default:
        throw new Error(`Page not found: ${pageName}`);
    }
  }
}

module.exports = PageFactory;
