const LoginPage = require('./pages/login.page');

class PageFactory {
  static createPage(pageName, driver) {
    switch(pageName) {
      case 'login':
        return new LoginPage(driver);
      // Agrega más páginas aquí si quieres
      default:
        throw new Error(`Page not found: ${pageName}`);
    }
  }
}

module.exports = PageFactory;
