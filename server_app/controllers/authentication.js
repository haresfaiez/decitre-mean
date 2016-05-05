var mongoose      = require('mongoose');
var passport      = require('passport');
var account       = mongoose.model('Account');

function register(req, res) {
  account.register(new account({ username : req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.render('register', { account : account });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
}

function registerView(req, res) {
  res.render('register', { });
}

function loginView(req, res) {
  res.render('login', { user : req.user });
}

function login(req, res) {
  res.redirect('/');
}

function logout(req, res) {
  req.logout();
  res.redirect('/');
}

module.exports.login    = login;
module.exports.logout   = logout;
module.exports.register = register;
module.exports.registerView = registerView;
module.exports.loginView = loginView;