var _ = require('lodash');

var forEach = require('./forEach.js');

console.log(forEach);

forEach.forEach(['oh', 'my', 'gosh'], function(i) { console.log(i) });

var kebabed = _.kebabCase('hello world!');

console.log(kebabed);

exports.hello = function() {
	console.log('hello!');
}

exports.forEach = forEachFile.forEach