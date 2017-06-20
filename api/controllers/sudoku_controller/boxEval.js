// boxEval examines the given box and returns the taken numbers in an array
const boxEval = (num1, num2, puzzleArr) => {
	const cornerX = 3 * Math.floor(num1 / 3);
	const cornerY = 3 * Math.floor(num2 / 3);
	const boxArr = [];
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (!Array.isArray(puzzleArr[i + cornerX][j + cornerY])) {
				boxArr.push(puzzleArr[i + cornerX][j + cornerY]);
			}
		}
	}
	return boxArr;
};

module.exports = boxEval;
