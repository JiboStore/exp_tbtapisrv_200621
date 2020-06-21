// https://timonweb.com/tutorials/how-to-enable-ecmascript-6-imports-in-nodejs/
require = require('esm')(module /*, options*/);
module.exports = require('./server');
