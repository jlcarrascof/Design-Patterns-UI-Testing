# Clean Code Principles for JavaScript

This document outlines 50 clean code principles applied to JavaScript, specifically tailored for our UI testing project using Selenium WebDriver, Jest, Page Object Model (POM), and Factory Pattern. These principles, inspired by Robert C. Martin's *Clean Code*, ensure that our codebase is readable, maintainable, scalable, and modular, as requested. Each principle is categorized and includes examples from our project files (`LoginPage.js`, `SecurePage.js`, `PageFactory.js`, `login.test.js`) where applicable.

## Table of Contents
1. [Meaningful Names](#meaningful-names)
2. [Functions](#functions)
3. [Format and Structure](#format-and-structure)
4. [Error Handling](#error-handling)
5. [Testing](#testing)
6. [Modularity and Reusability](#modularity-and-reusability)
7. [Maintenance](#maintenance)

## Meaningful Names

1. **Use descriptive names**: Choose names that clearly indicate purpose.  
   *Example*: In `login.test.js`, `loginPage` describes the page object, not just `page`.
   ```javascript
   let loginPage = PageFactory.createPage('login', driver);
   ```

2. **Avoid generic names**: Use specific names like `userCredentials` instead of `data`.  
   *Example*: `usernameInput` in `LoginPage.js` is specific to the username field.
   ```javascript
   this.usernameInput = By.id('username');
   ```

3. **Use pronounceable names**: Avoid abbreviations like `usr` or `pwd`.  
   *Example*: `username` and `password` in `LoginPage.js` are clear and pronounceable.
   ```javascript
   async enterUsername(username) {
     await this.driver.findElement(this.usernameInput).sendKeys(username);
   }
   ```

4. **Be consistent with naming conventions**: Use camelCase for variables and functions.  
   *Example*: `enterUsername` and `clickLogin` in `LoginPage.js` follow camelCase.
   ```javascript
   async clickLogin() {
     await this.driver.findElement(this.loginButton).click();
   }
   ```

5. **Use intention-revealing names**: Names should clarify what they do.  
   *Example*: `getFlashMessage` in `SecurePage.js` indicates it retrieves a UI message.
   ```javascript
   async getFlashMessage() {
     const el = await this.driver.findElement(this.flashMessage);
     return el.getText();
   }
   ```

6. **Avoid redundancy**: Don’t repeat context in names.  
   *Example*: `loginPage.login` would be redundant; `clickLogin` is sufficient.

7. **Use domain-specific names**: Use terms from the business domain.  
   *Example*: `login` and `securePage` in our tests reflect the application’s domain.
   ```javascript
   const securePage = PageFactory.createPage('secure', driver);
   ```

8. **Avoid unnecessarily long names**: Keep names concise if context is clear.  
   *Example*: `getErrorMessage` in `LoginPage.js` instead of `getUserAuthenticationErrorMessage`.
   ```javascript
   async getErrorMessage() {
     const el = await this.driver.wait(until.elementLocated(this.errorMessage), 5000);
     return await el.getText();
   }
   ```

9. **Use verbs for functions**: Functions should indicate actions.  
   *Example*: `clickLogin` and `enterUsername` in `LoginPage.js` are action-oriented.
   ```javascript
   async enterUsername(username) {
     await this.driver.findElement(this.usernameInput).sendKeys(username);
   }
   ```

10. **Avoid comments in names**: Don’t embed comments in variable names.  
    *Example*: `loginPage` is better than `loginPageWithError`.

## Functions

11. **Keep functions small**: Each function should do one thing.  
    *Example*: `enterUsername` in `LoginPage.js` only sends keys to the username field.
    ```javascript
    async enterUsername(username) {
      await this.driver.findElement(this.usernameInput).sendKeys(username);
    }
    ```

12. **Use one level of abstraction**: Don’t mix high-level and low-level logic.  
    *Example*: `clickLogin` in `LoginPage.js` only handles the click action, not validations.
    ```javascript
    async clickLogin() {
      await this.driver.findElement(this.loginButton).click();
    }
    ```

13. **Avoid side effects**: Functions should not modify unrelated states.  
    *Example*: `clickLogin` only triggers the login action, not other states.

14. **Use clear parameters**: Parameters should be self-explanatory.  
    *Example*: `enterUsername(username)` in `LoginPage.js` is clear.
    ```javascript
    async enterUsername(username) {
      await this.driver.findElement(this.usernameInput).sendKeys(username);
    }
    ```

15. **Limit parameter count**: Use objects for more than 3 parameters.  
    *Example*: Our methods like `enterUsername` take one parameter, keeping it simple.

16. **Avoid multiple return statements**: Use a single return when possible.  
    *Example*: `getFlashMessage` in `SecurePage.js` returns only the text.
    ```javascript
    async getFlashMessage() {
      const el = await this.driver.findElement(this.flashMessage);
      return el.getText();
    }
    ```

17. **Use pure functions when possible**: Avoid global state dependencies.  
    *Example*: Methods in `LoginPage` rely on `this.driver`, which is passed explicitly.

18. **Name functions by their action**: Function names should describe their task.  
    *Example*: `open` in `LoginPage.js` clearly opens the page.
    ```javascript
    async open() {
      await this.driver.get(this.url);
    }
    ```

19. **Avoid duplicated functions**: Reuse existing methods.  
    *Example*: `clickLogin` is reused across tests in `login.test.js`.

20. **Write declarative functions**: Focus on “what” not “how”.  
    *Example*: `loginPage.login` would describe the login action, not its implementation.

## Format and Structure

21. **Use consistent indentation**: Use 2 or 4 spaces consistently.  
    *Example*: Your `login.test.js` uses consistent 2-space indentation.
    ```javascript
    beforeAll(async () => {
      const serviceBuilder = new chrome.ServiceBuilder(chromedriver.path);
      // ...
    });
    ```

22. **Limit line length**: Keep lines under 80-120 characters.  
    *Example*: Your methods in `LoginPage.js` are short and readable.

23. **Organize imports at the top**: Group all imports at the file’s start.  
    *Example*: `login.test.js` imports `selenium-webdriver` and `PageFactory` at the top.
    ```javascript
    const { Builder } = require('selenium-webdriver');
    const PageFactory = require('./page.factory');
    ```

24. **Separate concepts with blank lines**: Use blank lines to group related code.  
    *Example*: Methods in `LoginPage.js` are separated by blank lines.
    ```javascript
    async open() {
      await this.driver.get(this.url);
    }

    async enterUsername(username) {
      await this.driver.findElement(this.usernameInput).sendKeys(username);
    }
    ```

25. **Use consistent spacing**: Spaces after commas, around operators.  
    *Example*: `PageFactory.createPage('login', driver)` uses proper spacing.

26. **Group related code**: Keep related methods together.  
    *Example*: `enterUsername` and `enterPassword` are grouped in `LoginPage.js`.

27. **Avoid redundant comments**: Don’t comment obvious code.  
    *Example*: `open` doesn’t need a comment like “opens the page”.

28. **Use comments to explain intent**: Comment only when needed.  
    *Example*: In `login.test.js`, `// Optional: close the session to clean up`.
    ```javascript
    // Optional: close the session to clean up after the test
    await securePage.logout();
    ```

29. **Structure files logically**: Organize files by purpose.  
    *Example*: Your `pages/` and `factories/` folders are well-organized.

30. **Keep files small**: Limit file size for clarity.  
    *Example*: `LoginPage.js` and `SecurePage.js` are concise, with focused methods.

## Error Handling

31. **Use try-catch for known errors**: Handle predictable failures.  
    *Example*: Suggested try-catch in `beforeAll` of `login.test.js`.
    ```javascript
    beforeAll(async () => {
      try {
        driver = await new Builder().forBrowser('chrome').build();
      } catch (error) {
        console.error('Error initializing driver:', error);
        throw error;
      }
    });
    ```

32. **Throw specific errors**: Use descriptive error messages.  
    *Example*: `PageFactory.js` throws a clear error for invalid pages.
    ```javascript
    throw new Error(`Page not found: ${pageName}`);
    ```

33. **Avoid unnecessary null checks**: Use waits instead of null checks.  
    *Example*: `getErrorMessage` in `LoginPage.js` uses explicit waits.
    ```javascript
    async getErrorMessage() {
      const el = await this.driver.wait(until.elementLocated(this.errorMessage), 5000);
      return await el.getText();
    }
    ```

34. **Validate inputs**: Check parameters before processing.  
    *Example*: `PageFactory` validates `pageName` with a switch.
    ```javascript
    switch(pageName) {
      case 'login':
        return new LoginPage(driver);
      // ...
    }
    ```

35. **Provide clear error messages**: Ensure errors are understandable.  
    *Example*: Test assertion checks for “Your username is invalid!”.

## Testing

36. **Name tests descriptively**: Test names should describe the scenario.  
    *Example*: `should show error for invalid login` in `login.test.js`.
    ```javascript
    test('should show error for invalid login', async () => {
      // ...
    });
    ```

37. **One test, one assertion**: Focus on a single outcome per test.  
    *Example*: Your invalid login test checks only the error message.
    ```javascript
    expect(errorMessage).toContain('Your username is invalid!');
    ```

38. **Keep tests independent**: Avoid test dependencies.  
    *Example*: Suggested `beforeEach` to reset the page state.
    ```javascript
    beforeEach(async () => {
      await loginPage.open();
    });
    ```

39. **Use constants for repeated values**: Centralize magic numbers/strings.  
    *Example*: `MAX_TIMEOUT` in `login.test.js`.
    ```javascript
    const MAX_TIMEOUT = 30000;
    ```

40. **Avoid complex logic in tests**: Delegate logic to POM classes.  
    *Example*: Tests use `loginPage.enterUsername` instead of raw Selenium calls.

## Modularity and Reusability

41. **Separate responsibilities**: Each class handles one concern.  
    *Example*: `LoginPage` manages login, `SecurePage` manages the secure area.
    ```javascript
    class LoginPage {
      async enterUsername(username) {
        await this.driver.findElement(this.usernameInput).sendKeys(username);
      }
    }
    ```

42. **Use modules**: Export reusable components.  
    *Example*: `module.exports = LoginPage` in `LoginPage.js`.

43. **Avoid code duplication**: Reuse methods across tests.  
    *Example*: `PageFactory.createPage` is reused in `login.test.js`.
    ```javascript
    const securePage = PageFactory.createPage('secure', driver);
    ```

44. **Create reusable abstractions**: Build generic utilities.  
    *Example*: `PageFactory` abstracts page creation.
    ```javascript
    static createPage(pageName, driver) {
      switch(pageName) {
        case 'login':
          return new LoginPage(driver);
      }
    }
    ```

45. **Use design patterns**: Apply patterns like POM and Factory.  
    *Example*: Your project uses POM and Factory Pattern.

## Maintenance

46. **Avoid magic strings/numbers**: Use constants for fixed values.  
    *Example*: `this.url` in `LoginPage.js` instead of hardcoding URLs.
    ```javascript
    this.url = 'https://the-internet.herokuapp.com/login';
    ```

47. **Refactor regularly**: Update code for consistency.  
    *Example*: Changed `SecurePage` selectors to `By.id` and `By.css`.
    ```javascript
    this.flashMessage = By.id('flash');
    ```

48. **Centralize configurations**: Use single sources for settings.  
    *Example*: `MAX_TIMEOUT` for all timeouts in `login.test.js`.

49. **Document only what’s needed**: Avoid over-commenting.  
    *Example*: Useful comment in `login.test.js` for logout intent.
    ```javascript
    // Optional: close the session to clean up after the test
    await securePage.logout();
    ```

50. **Write predictable code**: Ensure code behaves as expected.  
    *Example*: `enterUsername` and `clickLogin` in `LoginPage.js` are intuitive.

## Conclusion

These 50 clean code principles have been applied where relevant in our UI testing project to ensure readability, maintainability, and scalability. For example, descriptive names like `loginPage.enterUsername` and modular classes like `PageFactory` align with these principles, making the codebase clear and efficient. This document serves as a reference for our team to maintain high-quality code standards.