const fp = require('lodash/fp');

const cars = [
	{ name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true },
	{ name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false },
	{ name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false },
	{ name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
	{ name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true },
	{ name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false },
];

let _underscore = fp.replace(/\W+/g, '_');

const sanitizeNames = fp.map(fp.flowRight(_underscore, fp.toLower));
const names = fp.map(fp.prop('name'))(cars);

console.log(sanitizeNames(names));
/*
[ 
	'ferrari_ff',
  'spyker_c12_zagato',
  'jaguar_xkr_s',
  'audi_r8',
  'aston_martin_one_77',
  'pagani_huayra' 
]
*/