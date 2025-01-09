const FormPage = require('../pages/FormPage');
const allure = require('@wdio/allure-reporter').default;

describe('Form Tests', () => {
  before(() => {
    allure.addEnvironment('Browser', browser.capabilities.browserName);
    allure.addEnvironment('Platform', browser.capabilities.platformName);
    allure.addEnvironment('App Version', '1.0.0');
  });

  it('should fill and submit the form successfully', async () => {
    allure.addStep('Filling the form with valid data');
    await FormPage.fillForm('John Doe', 'john.doe@example.com');

    allure.addStep('Submitting the form');
    const successMessage = await FormPage.getSuccessMessage();

    allure.addStep(`Captured success message: ${successMessage}`);
    expect(successMessage).toBe('Form submitted successfully');
  });
});
