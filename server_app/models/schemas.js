var mongoose = require('mongoose');

var book = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category:{
        type: mongoose.Schema.ObjectId,
        ref: 'category'
    }
});

var category = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

mongoose.model('Category', category);
mongoose.model('Book',     book);
