const stringConverter = require('./stringConverter');
const arrTest = require('./UnitTesters/arrTest');
const arrayDeepCopy = require('./arrayDeepCopy');


const bruteChecker = (arr, position) => {
	console.log('brute', arr);
	console.log('pos', position);
	const str = arr.join('');
	let strArr = stringConverter(str);

	// clean the array from an array of strings to an array of nine, nine-member arrays.
	strArr = strArr.map(val => (
		val.replace(/[()]/g, '').split('')
	));
	// make two new copies of the array to be used and an empty array to hold bad blocks
	const copy1Arr = arrayDeepCopy(strArr);
	// const copy2Arr = arrayDeepCopy(strArr);

	// val is the row string, ind is the row number - send each to rowTester
	const row = strArr[parseInt(position / 9, 10)];
	const goodRow = arrTest(row);
	console.log('gR', goodRow);

	// Part II - organize arrays based on columns and send to vertTester method for checking

	// create a 'row' out of each column, and send it to arrTester.  arrTester will
	// be exactly the same as rowTester, except the output will be inverted to give
	// the correct blocks
	const col = position % 9;
	const vertArr = [];
	for (let i = 0; i < 9; i++) {
		vertArr.push(copy1Arr[i][col]);
	}
	const goodCol = arrTest(vertArr);

	// Part III - create a 'row' out of each block, and send it to blockTester.
	// blockTester will be exactly the same as rowTester, except the output will
	// be the offending blocks
	const topCorner = parseInt(position / 27, 10);
	const leftCorner = parseInt((position % 9) / 3, 10);
	const blockArr = [];
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			blockArr.push(strArr[(topCorner * 3) + i][(leftCorner * 3) + j]);
		}
	}
	const goodBlock = arrTest(blockArr);

	return goodRow && goodCol && goodBlock;
};

module.exports = bruteChecker;
