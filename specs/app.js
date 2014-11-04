'user strict';
/*global browser, by, element*/

describe('Hyperlink', function() {
  it('should greet the named user', function() {
    browser.get('https://hyperlinkapp.com');

    element(by.css('.nav-demo-account')).click();

    var greeting = element(by.css('.nav-settings'));

    expect(greeting.getText()).toEqual('Settings');
  });
});
