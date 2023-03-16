const passport = require('passport');
const passportJWT = require('passport-jwt');

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const modelUsuario = require('../models/modelUsuario');

passport.use('jwt', new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: '5nCBJxElQAByOM5'
}, (payload, done) => {
    return modelUsuario.findOne({_id: payload.sub})
        .then(user => {
            return done(null,user);
        })
        .catch(err => {
            return done(err);
        });
}));

module.exports = passport;
