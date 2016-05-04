var mongoose = require('mongoose');

var book     = mongoose.model('Book');

var search = function(req, res){
  var bookId = req.params.bookid;
  book.findById(bookId).populate('category').exec(function(err, book){
          res.status(200);
          res.json(book);
      });
}

module.exports.details = search;
