const prep = require('./prep');
const finTest = require('./finTest');
const rowEval = require('./rowEval');
const colEval = require('./colEval');
const boxEval = require('./boxEval');
const exclusiveRow = require('./exclusiveRow.js');
const exclusiveCol = require('./exclusiveCol.js');
const exclusiveBlock = require('./exclusiveBlock.js');
const deepEqual = require('./deepEqual');
const arrayDeepCopy = require('./arrayDeepCopy');
const reduceArray = require('./reduceArray');
const bruteForce = require('./bruteForce');
const cleanUp = require('./cleanUp');

const puzzleCheck = (arr) => {
	const puzzleArr = arrayDeepCopy(arr);
	puzzleArr.forEach((row, ind) => {
		row.forEach((item, ind2) => {
			if (Array.isArray(item)) {
				const rowNums = rowEval(ind, puzzleArr);
				const colNums = colEval(ind2, puzzleArr);
				const boxNums = boxEval(ind, ind2, puzzleArr);
				const numSet = new Set([...rowNums, ...colNums, ...boxNums]);
				const newItem = reduceArray(item, numSet);
				if (newItem.length !== item.length) {
					puzzleArr[ind][ind2] = Array.from(newItem);
				}
			}
		});
	});
	return puzzleArr;
};

const getSudokuSolution = (req, res) => {
	console.log('inGetSudokuSolution');
	const inputArray = req.swagger.params.inputString.value.numList;
	let puzzleArr = prep(inputArray);
	let changed = true;
	let count = 0;
	while (!finTest(puzzleArr) && changed) {
		count += 1;
		const origPuzzleArr = arrayDeepCopy(puzzleArr);
		changed = false;
		puzzleArr = puzzleCheck(puzzleArr);
		puzzleArr = cleanUp(puzzleArr);
		puzzleArr = exclusiveRow(puzzleArr);
		puzzleArr = exclusiveCol(puzzleArr);
		puzzleArr = exclusiveBlock(puzzleArr);
		changed = (!deepEqual(puzzleArr, origPuzzleArr));
		console.log(count);
	}

	puzzleArr = puzzleArr.reduce((val1, val2) => (
		val1.concat(val2)
	), []);

	if (puzzleArr.some(val => typeof val === 'object')) {
		puzzleArr = bruteForce(puzzleArr);
	}

	res.send({
		puzzleArr
	});
};

module.exports = {
	getSudokuSolution
};
