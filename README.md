# Lodash Require

[![Greenkeeper badge](https://badges.greenkeeper.io/elliotttf/lodash-require.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/elliotttf/lodash-require.svg?branch=master)](https://travis-ci.org/elliotttf/lodash-require)
[![Coverage Status](https://coveralls.io/repos/elliotttf/lodash-require/badge.svg?branch=master&service=github)](https://coveralls.io/github/elliotttf/lodash-require?branch=master)

This is a simple module to provide webpack friendly lodash includes. Lodash is intentionally
omitted from the module soas to not lock users into a specific version. This means that your
codebase will need to have lodash as a dependency for this module to function properly.

## Usage

```javascript
var map = require('lodash-require')('map');
// or
map = require('lodash-require')('collection', 'map');
```
