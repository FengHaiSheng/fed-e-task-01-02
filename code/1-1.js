const fp = require('lodash/fp');

const cars = [
	{ name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true },
	{ name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false },
	{ name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false },
	{ name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
	{ name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true },
	{ name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false },
];

let isLastInStock = function (cars) {
	// 获取最后一条数据
	let last_car = fp.last(cars);
	return fp.prop('in_stock', last_car);
}
console.log(isLastInStock(cars)); // false

///////////////////////////////////////////////////////////////////////////
// 答案
const isLastInStock2 = fp.flowRight(fp.prop('in_stock'), fp.last);
console.log(isLastInStock2(cars)); // false