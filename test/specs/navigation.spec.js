const HomePage = require('../pages/HomePage');
const ProfilePage = require('../pages/ProfilePage');
const allure = require('@wdio/allure-reporter').default;

describe('Navigation Tests', () => {
  before(() => {
    allure.addEnvironment('Browser', browser.capabilities.browserName);
    allure.addEnvironment('Platform', browser.capabilities.platformName);
    allure.addEnvironment('App Version', '1.0.0');
  });

  it('should navigate to the profile page', async () => {
    allure.addStep('Navigating to the profile page');
    await HomePage.navigateToProfile();

    allure.addStep('Validating if the profile header is visible');
    const profileHeader = await ProfilePage.profileHeader;

    expect(profileHeader).toBeVisible();
    allure.addAttachment('Profile Header Screenshot', await browser.takeScreenshot(), 'image/png');
  });

  it('should open the menu', async () => {
    allure.addStep('Opening the menu');
    await HomePage.openMenu();

    allure.addStep('Validating if the menu item is visible');
    const menuItem = await HomePage.menuItem;

    expect(menuItem).toBeVisible();
    allure.addAttachment('Menu Item Screenshot', await browser.takeScreenshot(), 'image/png');
  });
});
