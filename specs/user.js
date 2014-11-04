'user strict';
/*global browser, by, element*/

describe('LoginTestCases', function() {

  beforeEach(function() {
    //Ignore synchronize with the page when the service is communicating with the API
    browser.ignoreSynchronization = true;
    browser.get('https://hyperlinkapp.com/logout/');
    browser.waitForAngular();
    browser.ignoreSynchronization = false;
  });

  it('should login the demo account with one click', function () {
    browser.get('https://hyperlinkapp.com');

    element(by.css('.nav-demo-account')).click();
    browser.waitForAngular();

    var greeting = element(by.css('.nav-settings'));

    expect(greeting.getText()).toEqual('Settings');
  });

  it('should login the demo account using login form', function () {
    browser.get('https://hyperlinkapp.com/login/');

    //browser.wait(function() {
    //  return ptor.isElementPresent(by.css('[type="email"]'));
    //}, 8000);

    element(by.css('[type="email"]')).sendKeys('demo@hyperlinkapp.com');
    element(by.css('[type="password"]')).sendKeys('ynsgJzCJW8re');

    element(by.css('[type="submit"]')).click();
    browser.waitForAngular();

    var greeting = element(by.css('.nav-settings'));
    expect(greeting.getText()).toEqual('Settings');
  });

  afterEach(function() {
  })
});

/**
 * Demo Account
 */
describe('Hyperlink', function () {

  beforeEach(function() {
    // IE cannot delete HttpOnly cookies
    //https://code.google.com/p/selenium/issues/detail?id=5101
    //browser.manage().deleteAllCookies();
    //browser.get('https://hyperlinkapp.com/logout/');

    browser.ignoreSynchronization = true;
    browser.get('https://hyperlinkapp.com/logout/');
    browser.get('https://hyperlinkapp.com/');
    browser.ignoreSynchronization = false;
    element(by.css('.nav-demo-account')).click();
    browser.waitForAngular();
  });

  it('verify the user email', function() {

    browser.get('https://hyperlinkapp.com/email/confirm/?token=eyJ1aWQiOjN9.Bzon0A.U5saw431LTz2s6IwMrn-HVQwbUo');
    browser.waitForAngular();
    expect(element(by.css('[ng-switch-when="true"]'))).toBeTruthy();
  });
});
