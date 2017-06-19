const mongoose = require('mongoose');
const Problem = require('../../models/problem');

mongoose.Promises = global.Promises;


const getAllProblems = (req, res) => {
	console.log('Getting the problems!', req.swagger.params.level.value);
	Problem.find({})
	.then((problems) => {
		console.log('problems', problems);
		if (problems) {
			return res.status(200)
			.send(problems);
		}
	});
};

module.exports = {
	getAllProblems
};
