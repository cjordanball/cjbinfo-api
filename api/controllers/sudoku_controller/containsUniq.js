// containsUniq tests whether a number in string form (str) is contained a single time
// in a subarray in a group of items. If it returns an index, that number must replace that sub-
// array.

const containsUniq = (arr, str) => {
	const len = arr.length;
	let counter = 0;
	let holder;
	for (let i = 0; i < len; i++) {
		if (typeof arr[i] === 'string') {
			if (arr[i] === str) {
				return false;
			}
		} else if (arr[i].includes(str)) {
			holder = i;
			counter += 1;
		}
	}
	return counter === 1 ? holder : false;
};

module.exports = containsUniq;
