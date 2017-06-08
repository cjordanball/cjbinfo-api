const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SwaggerExpress = require('swagger-express-mw');

const app = express();
const config = {
	appRoot: __dirname
};

mongoose.Promise = global.Promise;

// if (process.env.NODE_ENV !== 'test') {
// 	mongoose.connect('mongodb://localhost/cjball');
// }

SwaggerExpress.create(config, (err, swagExpress) => {
	if (err) {
		throw err;
	}
	app.use(cors());

	swagExpress.register(app);

	app.use((errr, req, res, next) => {
		res.status(422).send({
			okay: false,
			error: errr.message
		});
		next();
	});
	const port = process.env.PORT || 8080;
	app.listen(port);
});

module.exports = app;
