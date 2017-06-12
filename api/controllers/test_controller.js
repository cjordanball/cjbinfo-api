const tester = (req, res) => {
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


// {
//     "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
// 	.eyJzdWIiOiI1OTNkOWQxMWY0MmQyYTE0MDRiNTczMzYiLCJpYXQiOjE0OTcyMzAyMTY1ODB9
// 	.ilpTEAC9WzPVWYSwNPsaTCZg5aVDlNTJ6wBM9py97OA"
// }
