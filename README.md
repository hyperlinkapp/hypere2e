Hyperlink e2e tests based on Protractor.

[![Build Status](https://travis-ci.org/hyperlinkapp/hypere2e.svg?branch=master)](https://travis-ci.org/hyperlinkapp/hypere2e)

## Usage

To run locally

    $ npm install -g protractor
    $ webdriver-manager start
    $ protractor conf/protractor.conf.js


To run on SauceLab:
    
    $ SAUCE_USERNAME=<username> SAUCE_ACCESS_KEY=<access_key> protractor conf/protractor-sourcelab.conf.js
