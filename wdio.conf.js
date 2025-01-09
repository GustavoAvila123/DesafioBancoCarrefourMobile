const fs = require('fs');

exports.config = {
    user: 'gustavosoaresdea_haKsjL',
    key: 'KunHxTMMTjL3mEjamCRx',
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 10,
    services: ['browserstack', 'appium'],
    capabilities: [
        {
            'bstack:options': {
                projectName: 'Android App Automation',
                buildName: 'Build 1',
                sessionName: 'Test Android App',
                deviceName: 'Samsung Galaxy S22 Ultra',
                osVersion: '12.0',
                app: 'R5CT10TXXXX',
                realMobile: false,
                local: 'false',
                debug: true,
            },
            platformName: 'Android',
            automationName: 'UiAutomator2',
        },
        {
            'bstack:options': {
                projectName: 'iOS App Automation',
                buildName: 'Build 1',
                sessionName: 'Test iOS App',
                deviceName: 'iPhone 14 Pro Max',
                platformVersion: '16',
                app: 'LHYC2QXXXX',
                realMobile: false,
                local: 'false',
                debug: true,
            },
            platformName: 'iOS',
            automationName: 'XCUITest',
        }
    ],
    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',

    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],

    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            const screenshotDir = './errorShots';
            if (!fs.existsSync(screenshotDir)) {
                fs.mkdirSync(screenshotDir, { recursive: true });
            }
            const screenshotPath = `${screenshotDir}/${test.title.replace(/\s+/g, '_')}.png`;
            browser.saveScreenshot(screenshotPath);

            const allure = require('@wdio/allure-reporter').default;
            allure.addAttachment('Error Screenshot', browser.takeScreenshot(), 'image/png');
            allure.addAttachment('Test Context', JSON.stringify(context, null, 2), 'application/json');
            console.log(`Screenshot saved at ${screenshotPath}`);
        }
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
};
