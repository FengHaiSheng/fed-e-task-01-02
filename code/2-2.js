/*
实现一个函数ex2, 能够使用fp.first获取列表的第一个元素
*/

const fp = require('lodash/fp');
const { Maybe, Container } = require('./support');

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);

let x2 = value => fp.first(value);

console.log(xs.map(x2)); // Container { _value: 'do' }