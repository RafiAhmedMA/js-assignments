'use strict';

var assert = require('assert');
var tasks = require('../task/06-conditions-n-loops-tasks');
var result = tasks.getCommonDirectoryPath(['/web/images/image1.png', '/web/images/image2.png']);
console.log(result);