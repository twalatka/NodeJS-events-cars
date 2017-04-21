
if (ENV !== 'production') {
  require('babel-register');
  require('babel-polyfill');
  module.exports = require('./src');
} else {
  module.exports = require('./dist');
}