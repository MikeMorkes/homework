var _ = require('lodash');

var forEach = require('./forEach.js');

var example = require('ok-coders-back-end-example');

var kebabed = _.kebabCase('hello world!'); // kebabCase is part of lodash

var testArr = [1,2,3,4,5];

var slicedUp = _.slice(testArr,  [start=3], [end=testArr.length]);

var backItUp = _.reverse(testArr);

console.log(kebabed);

console.log(slicedUp);

console.log(backItUp);

forEach.forEach(['oh', 'my', 'gosh'], function(i) { 
	console.log(i) 
});

example.hello();

example.forEach(['Mike', 'Brandy','Boomer'], function(i) {console.log(i)});

