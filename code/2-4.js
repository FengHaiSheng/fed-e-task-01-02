/*
使用Maybe重写ex4, 不要有if语句
*/

const fp = require('lodash/fp');
const { Maybe, Container } = require('./support');

let ex4 = function (n) {
	let maybe = Maybe.of(n).map(n => parseInt(n))

	return maybe._value;
}

console.log(ex4(null)); // null
console.log(ex4('1a')); // 1