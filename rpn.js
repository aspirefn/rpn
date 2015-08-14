// rpn.js
// reverse polish notation calculator module

// check if node.js is present
if (typeof module !== 'undefined') {
  module.exports = {
    receive: receive
  } 
}

var operators = {
  'add': function(a, b) {	
    return b + a;
  },
  'subtract': function(a, b) {
    return b - a;
  },
  'multiply': function(a, b) {
    return b * a;
  },
  'divide': function(a, b) {
    return b / a;
  }
};

var entries = [];

function receive (input) { 
  if (typeof input === 'number') {
    entries.push(input);
  }
  else if (input in operators) {
    var op = operators[input];
    var result = op(entries.pop(), entries.pop());
    entries.push(result);

    return result;
  }
}
