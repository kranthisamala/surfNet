var passport  = require('passport');
var googleOauth = require('passport-google-oauth20');
var keys = require("./keys");
passport.use(
  new GoogleStrategy({
    callbackURL:'/auth/google/redirect'
    clientID: keys.clientID,
    clientSecret: keys.clientSecret
  },() => {

  })
);
