const cleanUp = (arr) => {
	let newArr = Array.from(arr);
	newArr = newArr.map(row => (
		row.map((item) => {
			if (Array.isArray(item) && item.length === 1) {
				return item[0];
			}
			return item;
		})
	));
	return newArr;
};

module.exports = cleanUp;
