require('../../services/passport');
const passport = require('passport');

// const requireAuth = passport.authenticate('jwt', { session: false });

const JWTAuth = (req, authOrSecDef, ApiKey, callback) => {
	console.log('req.body', req.swagger);
	console.log('AUTH', authOrSecDef);
	if (ApiKey.length >= 20) {
		return callback(null, true);
	}
	return callback(new Error('access denied'));
};

module.exports = {
	JWTAuth
};
