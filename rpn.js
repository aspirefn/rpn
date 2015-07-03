// rpn.js
// reverse polish notation calculator module

module.exports = {
  receive: receive
}

var operators = {
  '+': function(a, b) {	
    return a + b;
  },
  '-': function(a, b) {
    return a - b;
  },
  '*': function(a, b) {
    return a * b;
  },
  '/': function(a, b) {
    return a / b;
  }
};

var entries = [];

function receive (input) {
  if (typeof input === 'number')
    entries.push(input);
  else if (input in operators) {
    var op = operators[input];
    var result = op(entries.pop(), entries.pop());
    entries.push(result);

    return result;
  }
}
