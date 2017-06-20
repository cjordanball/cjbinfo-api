/*
this function takes a string of the puzzle in the form -3-91-7-45-6------ ... and converts
it to an array of 9 row arrays.
*/
const stringConverter = (str) => {
	if (str.length !== 81) {
		console.log('Input is incorrect');
		return null;
	}
	const arr = [];
	for (let i = 0; i < 9; i++) {
		let item = str.slice(i * 9, (i * 9) + 9);
		item = `(${item})`;
		arr.push(item);
	}
	return arr;
};

module.exports = stringConverter;
