const arrTest = (arr) => {
	console.log('arrTest', arr);
	const slimArr = arr.filter(val => val !== '-');
	const rowSet = new Set(slimArr);
	if (rowSet.size === slimArr.length) {
		return true;
	}
	return false;
};

module.exports = arrTest;
