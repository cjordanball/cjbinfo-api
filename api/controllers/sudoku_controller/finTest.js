// finTest returns false if any of the entries is still an array and not a number string

const finTest = arr => (
	!arr.some(row => (
		row.some(entry => Array.isArray(entry))
	))
);

module.exports = finTest;
