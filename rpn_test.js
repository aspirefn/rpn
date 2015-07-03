#!/usr/bin/nodejs

// rpn_test.js
// tests for rpn.js module

var rpn = require('./rpn.js');

var assert = require('assert');

rpn.receive(6);
rpn.receive(3);
var result = rpn.receive('+');

assert(result === 9);

rpn.receive(5);
rpn.receive(2);
rpn.receive('+');
rpn.receive(4);
result = rpn.receive('+');

assert(result === 11);

console.log('done');



