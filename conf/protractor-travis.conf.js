'use strict';

var config = require('./protractor-saucelabs.conf.js').config;

var testName = 'Protractor Tests';

config.multiCapabilities = [{
  'browserName': 'firefox',
  'name': testName,
  'tunnel-identifier': (process.env.TRAVIS) ? process.env.TRAVIS_JOB_NUMBER : process.env.TUNNEL_ID,
  'build': process.env.TRAVIS_BUILD_NUMBER
}
];

exports.config = config;