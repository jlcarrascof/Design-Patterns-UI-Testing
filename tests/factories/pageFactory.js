import LoginPage from '../pages/loginPage.js';
import SecurePage from '../pages/securePage.js';

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

export default PageFactory;
