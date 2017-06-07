const tester = (req, res) => {
	res.send({
		hi: 'this is the test message'
	});
};

module.exports = {
	tester
};
