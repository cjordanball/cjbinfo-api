const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.Promises = global.Promises;

// Define the user Schema
const ProblemSchema = new Schema(
	{
		level: {
			type: String
		},
		serialNumber: {
			type: Number
		},
		name: {
			type: String
		},
		description: {
			type: String
		},
		methods: {
			type: [String]
		},
		concepts: {
			type: [String]
		},
		statement: {
			type: String
		},
		comments: {
			type: [String]
		},
		solution: {
			type: String
		}

	}
);

// create the model class
const ProblemClass = mongoose.model('problem', ProblemSchema);

// export the model
module.exports = ProblemClass;
