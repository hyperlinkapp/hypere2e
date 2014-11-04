'user strict';
/*global browser, by, element*/

/**
 * Demo Account
 */
describe('Hyperlink', function () {

  it('should login the demo account with one click', function () {
    browser.get('https://hyperlinkapp.com');

    element(by.css('.nav-demo-account')).click();

    var greeting = element(by.css('.nav-settings'));

    expect(greeting.getText()).toEqual('Settings');

    browser.get('https://hyperlinkapp.com/logout/')
  });

});


describe('Hyperlink', function () {
  it('should login the demo account using login form', function () {
    browser.get('https://hyperlinkapp.com/login/');

    var ptor = protractor.getInstance();
    browser.wait(function() {
      return ptor.isElementPresent(by.css('[type="email"]'));
    }, 8000);

    element(by.css('[type="email"]')).sendKeys('demo@hyperlinkapp.com');
    element(by.css('[type="password"]')).sendKeys('ynsgJzCJW8re');

    element(by.css('[type="submit"]')).click();

    var greeting = element(by.css('.nav-settings'));
    expect(greeting.getText()).toEqual('Settings');

    browser.get('https://hyperlinkapp.com/logout/')
  });
});
