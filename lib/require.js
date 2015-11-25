if (typeof window === 'undefined') {
  var _ = require('lodash');
}

module.exports = function (group, component) {
  if (typeof component === 'undefined') {
    component = group;
    group = '';
  }

  if (typeof window === 'undefined') {
    return _[component];
  }

  return require(
    ['lodash', group, component]
      .filter(function (frag) { return frag; })
      .join('/')
  );
};

