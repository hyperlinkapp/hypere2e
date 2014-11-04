'use strict';

var config = require('./protractor.common.js').config;

config.sauceUser = process.env.SAUCE_USERNAME;

config.sauceKey = process.env.SAUCE_ACCESS_KEY;

exports.config = config;