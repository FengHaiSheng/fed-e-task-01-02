/*
实现一个函数ex3, 使用safeProp和fp.first找到user的名字的首字母
*/

const fp = require('lodash/fp');
const { Maybe, Container } = require('./support');

let safeProp = fp.curry(function (x, o) {
	return Maybe.of(o[x]);
})
let user = { id: 2, name: 'Albert' };

// 题目需要的结果没有特殊说明，所以我理解的是两种答案

// 答案一
const v = v => {
	return v.map(value => fp.first(value));
}
let ex3 = fp.flowRight(v, safeProp('name'));

console.log(ex3(user)); // Maybe { _value: 'A' }

// 答案二
let ex3_2 = fp.flowRight(fp.first, fp.prop('_value'), safeProp('name'));

console.log(ex3_2(user)); // A