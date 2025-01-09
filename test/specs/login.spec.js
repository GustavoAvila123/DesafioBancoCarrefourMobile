const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');
const allure = require('@wdio/allure-reporter').default;

describe('Login Tests', () => {
  before(() => {
    allure.addEnvironment('Browser', browser.capabilities.browserName);
    allure.addEnvironment('Platform', browser.capabilities.platformName);
    allure.addEnvironment('App Version', '1.0.0');
  });

  it('should login with valid credentials', async () => {
    allure.addStep('Attempting to log in with valid credentials');
    await LoginPage.login('validUsername', 'validPassword');

    allure.addStep('Validating if the menu is accessible after login');
    await HomePage.openMenu();
    allure.addAttachment('Menu Screenshot', await browser.takeScreenshot(), 'image/png');
  });

  it('should show error with invalid credentials', async () => {
    allure.addStep('Attempting to log in with invalid credentials');
    await LoginPage.login('invalidUsername', 'invalidPassword');

    allure.addStep('Validating error message is displayed');
    const errorMessage = await LoginPage.getErrorMessage();

    expect(errorMessage).toBe('Invalid username or password');
    allure.addAttachment('Error Message Screenshot', await browser.takeScreenshot(), 'image/png');
  });
});
