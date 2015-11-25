var _ = require('lodash');
var lodashRequire = require('../');

module.exports = {
  server: function (test) {
    test.expect(1);
    test.equal(
      typeof lodashRequire('noop'),
      typeof _.noop,
      'Server require did not work.'
    );
    test.done();
  },
  browser: function (test) {
    global.window = {};
    test.expect(1);
    test.equal(
      typeof lodashRequire('utility', 'noop'),
      typeof _.noop,
      'Browser require did not work.'
    );
    test.done();
  }
};

