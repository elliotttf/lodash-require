# Lodash Require

This is a simple module to provide webpack friendly lodash includes. Lodash is intentionally
omitted from the module soas to not lock users into a specific version. This means that your
codebase will need to have lodash as a dependency for this module to function properly.

## Usage

```javascript
var map = require('lodash-require')('map');
// or
map = require('lodash-require')('collection', 'map');
```
