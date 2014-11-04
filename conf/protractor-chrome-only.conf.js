'use strict';

var config = require('./protractor.common.js').config;

// The address of a running selenium server.
config.seleniumAddress = 'http://localhost:4444/wd/hub';

//config.seleniumServerJar = "node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar";

//config.chromeDriver = 'node_modules/protractor/selenium/chromedriver';

config.chromeOnly = false;

config.multiCapabilities = [
  { 'browserName': 'chrome' }
];

exports.config = config;