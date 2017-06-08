const tester = (req, res) => {
	res.send({
		hi: 'redux cycle: ok, AJAX: ok'
	});
};

module.exports = {
	tester
};
