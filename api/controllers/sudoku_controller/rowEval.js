// rowEval examines the given row and returns the taken numbers in an array
const rowEval = (num, puzzleArr) => {
	const rowArr = [];
	for (let i = 0; i < 9; i++) {
		if (!Array.isArray(puzzleArr[num][i])) {
			rowArr.push(puzzleArr[num][i]);
		}
	}
	return rowArr;
};

module.exports = rowEval;
