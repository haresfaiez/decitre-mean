var mongoose      = require('mongoose');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var account       = mongoose.model('Account');

passport.use(new LocalStrategy(account.authenticate()));
passport.serializeUser(account.serializeUser());
passport.deserializeUser(account.deserializeUser());