// colEval examines the given column and returns the taken numbers in an array
const colEval = (num, puzzleArr) => {
	const colArr = [];
	for (let i = 0; i < 9; i++) {
		if (!Array.isArray(puzzleArr[i][num])) {
			colArr.push(puzzleArr[i][num]);
		}
	}
	return colArr;
};


module.exports = colEval;
