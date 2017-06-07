const tester = (req, res) => {
	console.log('Bazoom');
	res.send({
		hi: 'this is the test message'
	});
};

module.exports = {
	tester
};
