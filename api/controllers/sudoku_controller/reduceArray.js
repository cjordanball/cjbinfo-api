// this function removes the elements in the Set from arr1

const reduceArray = (arr, numSet) => {
	const newArr = Array.from(arr);
	numSet.forEach((val) => {
		const placeNum = newArr.indexOf(val);
		if (placeNum !== -1) {
			newArr.splice(placeNum, 1);
		}
	});
	return newArr;
};

module.exports = reduceArray;
