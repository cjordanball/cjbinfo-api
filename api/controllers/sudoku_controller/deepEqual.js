const deepEqual = (arr1, arr2) => {
	const len = arr1.length;
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < len; i++) {
		if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
			if (!deepEqual(arr1[i], arr2[i])) {
				return false;
			}
		} else if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
};

module.exports = deepEqual;
