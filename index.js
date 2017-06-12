const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SwaggerExpress = require('swagger-express-mw');
const swaggerSecurityHandlers = require('./api/securityHandlers');

const app = express();
// const config = {
// 	appRoot: __dirname
// };

const config = {
	appRoot: __dirname, // required config
	swaggerSecurityHandlers
};

mongoose.Promise = global.Promise;

switch (process.env.NODE_ENV) {
case 'test':
	mongoose.connect('mongodb://localhost/cjballInfoTestDB');
	break;
case 'production':
	mongoose.connect('mongodb://roottoprodDB');
	break;
default:
	mongoose.connect('mongodb://localhost/cjballInfoDB');
}


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
	const PORT = process.env.PORT || 8080;
	app.listen(PORT);
});

module.exports = app;
