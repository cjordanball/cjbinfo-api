const containsUniq = require('./containsUniq');
const arrayDeepCopy = require('./arrayDeepCopy');

const exclusiveRow = (arr) => {
	const newArr = arrayDeepCopy(arr);
	newArr.forEach((row) => {
		for (let i = 1; i <= 9; i++) {
			const str = i.toString();
			const res = containsUniq(row, str);
			if (res !== false) {
				row[res] = str;
			}
		}
	});
	return newArr;
};

module.exports = exclusiveRow;
