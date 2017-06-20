const containsUniq = require('./containsUniq');
const arrayDeepCopy = require('./arrayDeepCopy');

const exclusiveCol = (arr) => {
	const newArray = arrayDeepCopy(arr);
	for (let i = 0; i < 9; i++) {
		const vertArr = [];
		for (let j = 0; j < 9; j++) {
			vertArr.push(arr[j][i]);
		}
		for (let k = 1; k <= 9; k++) {
			const str = k.toString();
			const res = containsUniq(vertArr, str);
			if (res !== false) {
				newArray[res][i] = str;
			}
		}
	}
	return newArray;
};

module.exports = exclusiveCol;
