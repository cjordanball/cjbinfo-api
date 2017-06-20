const unsolvedBlocks = (arr) => {
	const collectionArr = [];
	arr.forEach((val, ind) => {
		if (typeof val === 'object') {
			collectionArr.push(ind);
		}
	});
	return collectionArr;
};

module.exports = unsolvedBlocks;
