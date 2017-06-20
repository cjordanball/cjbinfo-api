const unsolvedBlocks = require('./unsolvedBlocks');
const bruteChecker = require('./bruteChecker');

const bruteForce = (puzzleArr) => {
	// linearPuzzleArr will be the puzzle as a single array of 81
	// elements, easier to work with
	const linearPuzzleArr = [];
	// openBlocks is an array of spaces (0 - 80) that have not been
	// solved prior to bruteForce()
	const openBlocks = unsolvedBlocks(puzzleArr);
	// create linearPuzzleArr
	puzzleArr.forEach((val) => {
		if (typeof val === 'object') {
			const arrObject = {
				numArr: val,
				place: 0
			};
			linearPuzzleArr.push(arrObject);
		} else {
			linearPuzzleArr.push(val);
		}
	});

	// testingArr will be a full array of known number and '-'
	// for any unknown numbers, rather than the object
	const testingArr = linearPuzzleArr.map(val => (
		typeof val === 'string' ? val : '-'
    ));
	// we are going to go back and forth through the open board
	// positions, and keep track of where we are with the variable
	// boardPosition.  We will start at position 0.
	let boardPosition = 0;
	while (boardPosition < openBlocks.length) {
		let hotBox = linearPuzzleArr[openBlocks[boardPosition]];

		// find the first value that works in the hotBox
		let testResult = false;
		while (!testResult) {
			console.log('hhbp', hotBox);
			if (hotBox.place >= hotBox.numArr.length) {
				console.log('inif');
				testingArr[openBlocks[boardPosition]] = '-';
				hotBox.place = 0;
				boardPosition -= 2;
				break;
			} else {
				console.log('test0', hotBox);
				testingArr[openBlocks[boardPosition]] = hotBox.numArr[hotBox.place];
				testResult = bruteChecker(testingArr, openBlocks[boardPosition]);
				console.log('testR', testResult);
				hotBox.place += 1;
			}
		}
		boardPosition += 1;
	}
	return (testingArr);
};

module.exports = bruteForce;
