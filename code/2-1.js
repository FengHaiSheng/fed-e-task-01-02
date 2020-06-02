/*
使用fp.add(x, y) 和 fp.map(f, x) 创建一个能让functor里的值增加的函数ex1
*/

const fp = require('lodash/fp');
const { Maybe, Container } = require('./support');

let maybe = Maybe.of([5, 6, 1]);

let ex1 = value => fp.map(fp.add(2), value);

console.log(ex1([5, 6, 1])); // [ 7, 8, 3 ]
console.log(maybe.map(ex1)); // Maybe { _value: [ 7, 8, 3 ] }
