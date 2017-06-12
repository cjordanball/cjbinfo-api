const passport = require('passport');
const User = require('../models/userSchema');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.JWT_PASSPHRASE
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
	console.log('pay', payload);
	User.findById(payload.sub, (err, user) => {
		if (err) {
			return done(err, false);
		}
		if (user) {
			return done(null, true);
		}
		return done(null, false);
	});
});

passport.use(jwtLogin);
