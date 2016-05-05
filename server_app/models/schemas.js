var mongoose = require('mongoose');


var category = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});
mongoose.model('Category', category);

var book = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category:{
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    }
});
mongoose.model('Book',     book);

var passportLocalMongoose = require('passport-local-mongoose');
var account = new mongoose.Schema({
    username: String,
    password: String
});
account.plugin(passportLocalMongoose);

mongoose.model('Account', account);
