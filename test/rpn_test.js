#!/usr/bin/nodejs

// rpn_test.js
// tests for rpn.js module

var rpn = require('../rpn.js');

var assert = require('assert');

// addition test
rpn.receive(6);
rpn.receive(3);
var result = rpn.receive('add');

assert(result === 9);

// subtraction test
rpn.receive(6);
rpn.receive(3);
result = rpn.receive('subtract');

assert(result === 3);

// multiplication test
rpn.receive(6);
rpn.receive(3);
result = rpn.receive('multiply');

assert(result === 18);

// division test
rpn.receive(6);
rpn.receive(3);
result = rpn.receive('divide');

assert(result === 2);

// chain test
rpn.receive(5);
rpn.receive(2);
rpn.receive('add');
rpn.receive(4);
result = rpn.receive('subtract');
rpn.receive(2);
rpn.receive('multiply');
rpn.receive(3);
result = rpn.receive('divide');

assert(result === 2);

console.log('done');
