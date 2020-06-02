## 一、简单题

### 1. 描述引用计数的工作原理和优缺点。

原理：通过设置引用计数器，来维护对象的引用数。对象的引用关系改变时修改引用数数值，当引用数为0时，GC工作回收其空间。

优点：
1. 发现引用数为零的对象时，立马进行回收；
2. 使用平台使用的内存有上限，当快到达到上限时，会去立马找到引用为0的对象进行回收，因此可以最大限度减少程序暂停。

缺点：
1. 它无法回收循环引用的对象；
2. 因为增加了引用数的维护，而且要时刻去监控对象的引用关系改变，来修改这个引用数，因此时间和资源开销会更大。

### 2. 描述标记整理算法的工作流程。

它可以看做标记清楚的增强。开始时，去遍历所有的对象，对可达活动对象进行标记，然后对可达活动对象进行整理让他们的内存地址上连续，最后将非活动对象的空间进行回收；

优点：减少碎片化空间

缺点：不能立即回收垃圾对象

### 3. 描述V8中新生代存储区垃圾回收的流程。

首先，V8对新生代存储的垃圾回收采用复制算法+标记整理。新生代内存区分为了二个等大小空间，使用空间为From，空闲空间为To。
我们将对活动对象存储于From空间内，当From空间使用到某种程度后，会对其活动对象进行标记整理，然后将From内的活动对象拷贝至To空间后，再将
From空间清除，然后将From与To的身份互换。

注意点：当轮过一轮GC后，还有存活的新生代对象，需要将其晋升到老生对象区

### 4. 描述增量标记算法在何时使用，及工作原理。

需要提高垃圾的回收的效率时，就要使用到到增量标记算法。

工作原理：将以前一整段垃圾回收进行拆分成多段，与程序执行交替着运行, 不像以前是程序运行时就不能进行垃圾回收。交替运行后，第一次标记不到的更深层的对象，在程序执行一段后就可能标记得到。

## 二、代码题1

基于以下代码完成下面的四个练习

```javascript
const fp = require('lodash/fp');

// 数据
// horsepower 马力，dollar_value 价格，in stock 库存
const cars = [
	{ name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true },
	{ name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false },
	{ name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false },
	{ name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
	{ name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true },
	{ name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false },
];
```

### 练习1

使用函数组合fp.flowRight() 重新实现下面这个函数

```javascript
let isLastInStock = function (cars) {
	// 获取最后一条数据
	let last_car = fp.last(cars);
	return fp.prop('in_stock', last_car);
}
```

### 练习2

使用fp.flowRight()、fp.prop()和fp.first()获取第一个car的name

### 练习3

使用帮助函数_average重构averageDollarValue， 使用函数组合的方式实现

```javascript
let _average = function (xs) {
	return fp.reduce(fp.add, 0, xs) / xs.length
}
// <- 无须改动

let averageDollarValue = function (cars) {
	let dollar_values = fp.map(function(car) {
		return car.dollar_value
	}, cars);

	return dollar_values;
}
```









