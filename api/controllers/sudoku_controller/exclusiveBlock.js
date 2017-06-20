const containsUniq = require('./containsUniq');
const arrayDeepCopy = require('./arrayDeepCopy');


const exclusiveBlock = (arr) => {
	const newArr = arrayDeepCopy(arr);
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			const blockArr = [];
			for (let k = 0; k < 3; k++) {
				for (let l = 0; l < 3; l++) {
					blockArr.push(arr[(i * 3) + k][(j * 3) + l]);
				}
			}
			for (let k = 1; k <= 9; k++) {
				const str = k.toString();
				const res = containsUniq(blockArr, str);
				if (res !== false) {
					newArr[(i * 3) + (parseInt(res / 3, 10))][(j * 3) + (res % 3)] = str;
				}
			}
		}
	}
	return newArr;
};

module.exports = exclusiveBlock;
