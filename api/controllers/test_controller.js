const tester = (req, res) => {
	console.log('Here we are!');
	res.send({
		hi: 'redux cycle: ok, AJAX: ok'
	});
};

const testAuth = (req, res) => {
	console.log('test1');
	res.send({
		okay: 'we are getting authed'
	});
};

module.exports = {
	tester,
	testAuth
};
