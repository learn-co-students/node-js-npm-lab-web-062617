var _ = require('lodash')

function greet(greeting, greetee) {
  return `${greeting}, ${greetee}!`;
}

module.exports = _.curry(greet)
