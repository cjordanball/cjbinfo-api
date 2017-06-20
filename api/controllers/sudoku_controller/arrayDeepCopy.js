const arrayDeepCopy = (arr) => {
	const arrayCopy = [];
	arr.forEach((item) => {
		if (!Array.isArray(item)) {
			arrayCopy.push(item);
		} else {
			arrayCopy.push(arrayDeepCopy(item));
		}
	});
	return arrayCopy;
};

module.exports = arrayDeepCopy;
