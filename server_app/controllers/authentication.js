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


module.exports.register = register;