/** @format */
const log = val => console.log(val);
// todo => Array methods
const arr1 = ['Cecilie', 'Lone'];
const arr2 = ['Emil', 'Tobias', 'Linus'];
const num1 = [32, 33, 16, 40];
const num2 = [
	[0, 1],
	[2, 3],
	[4, 5],
];

/**
 * todo => arr.concat()
 *
 * desc: joins two or more arrays
 * together to become one.
 *
 * has two methods
 *
 * 1 - es5 mtd
 * 2 - es6 mtd
 */
const concatFn = (val1, val2) => {
	// old 1
	let arr = val1.concat(val2);
	// new 2
	arr = [...val1, ...val2];
	return arr;
};

/**
 * todo => arr.copyWithin()
 *
 * desc: copys some value from the
 * (target, start, stop) target position
 * through start to stop
 */
const copyWithinFn = val => {
	return val.copyWithin(2, 0);
};

/**
 * todo => arr.entries()
 *
 * desc: returns the key value pairs of the array
 */
const entriesFn = val => {
	const f = val.entries();
	let arrT = [];
	for (let x of f) {
		arrT.push(x);
	}
	return arrT;
};

/**
 * todo => arr.every()
 *
 * desc: returns true if all elements meets the special query else false
 */
const everyFn = val => val.every(age => age > 18);

/**
 * todo => arr.fill()
 *
 * desc: replace all elements with a static value
 */
const fillFn = val => {
	val.fill('kiwi');
	return val;
};

/**
 * todo => arr.filter()
 *
 * desc: new array of elements that
 * pass a test
 */
const filterFn = val => val.filter(item => item > 18);

/**
 * todo => arr.find()
 *
 * desc: returns first value that
 * passes a test from an array
 */
const findFn = val => val.find(item => item > 18);

/**
 * todo => arr.findIndex()
 *
 * desc: returns the index of the first
 * value that passes a test from an array
 */
const findIndexFn = val => val.findIndex(item => item < 18);

/**
 * todo => arr.forEach()
 *
 * desc: calls a function for each elements
 * in an array
 */
const forEachFn = val => val.forEach(item => log(`-> ${item}`));

/**
 * todo => arr.from()
 *
 * desc: creates an array from a string
 * or object
 */
const fromFn = val => Array.from(val, (v, k) => `${k} => ${v}`);

/**
 * todo => arr.includes()
 *
 * desc: creates an array from a string
 * or object
 */
const includesFn = (val, item) => val.includes(item, 0);

/**
 * todo => arr.indexOf()
 *
 * desc: returns the index of the first
 * value that passes a test from an array
 */
const indexOfFn = val => val.indexOf(16);

/**
 * todo => arr.isArray()
 *
 * desc: returns true if an element
 * is an array
 */
const isArrayFn = val => Array.isArray(val);

/**
 * todo => arr.join()
 *
 * desc: returns all the values of an array as a text
 */
const joinFn = (val, k) => val.join(k);

/**
 * todo => arr.keys()
 *
 * desc: returns all the keys of an array
 */
const keysFn = val => {
	let keys = val.keys();
	let text = '';
	for (let x of keys) {
		text += `${x} - `;
	}
	return text;
};

/**
 * todo => arr.lastIndexOf()
 *
 * desc: returns the last index of an item
 */
const lastIndexOfFn = (val, item) => val.lastIndexOf(item);

/**
 * todo => arr.map()
 *
 * desc: returns a new array from previous array
 */
const mapFn = val => val.map(v => `${v}`);

/**
 * todo => arr.pop()
 *
 * desc: remove last item from an array
 */
const popFn = val => val.pop();

/**
 * todo => arr.push()
 *
 * desc: add item from an array
 */
const pushFn = (val, v) => val.push(v);

/**
 * todo => arr.reduce()
 *
 * desc: add all items together and returns the total sum
 */
const reduceFn = val => val.reduce((t, v) => t + v);

/**
 * todo => arr.reduceRight()
 *
 * desc: add all items together and returns the total sum from right to left
 */
const reduceRightFn = a =>
	a.reduceRight((acc, currentValue) => acc.concat(currentValue));

/**
 * todo => arr.reverse()
 *
 * desc: The reverse() method reverses an
 * array in place. The first array element
 * becomes the last, and the last array
 * element becomes the first.
 */
const reverseFn = a => a.reverse();

// todo => arr.shift()

/**
 * todo => arr.shift()
 *
 * desc: The shift() method removes
 * the first element from an array and
 * returns that removed element.
 * This method changes the length of the array.
 */
const shiftFn = a => a.shift();

// todo => arr.slice()
// todo => arr.some()
// todo => arr.sort()
// todo => arr.splice()
// todo => arr.toString()
// todo => arr.unshift()
// todo => Array.valuesOf()

// todo => Properties

/**
 * todo => arr.constructor
 *
 * desc: returns the constructor of an array
 */
const constructorFn = val => val.constructor;

/**
 * todo => arr.length
 *
 * desc: returns the length of an array
 */
const lengthFn = val => val.length;

/**
 * todo => arr.prototype
 *
 * desc: creates a new prototype to array prototypes
 *
 */
Array.prototype.toUpper = function () {
	for (let x = 0; x < this.length; x++) {
		this[x] = this[x].toUpperCase();
	}
	return this;
};
// todo => Array.prototype

const res = concatFn(arr1, arr2);
log(shiftFn(num2));
