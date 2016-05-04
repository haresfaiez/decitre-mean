var mongoose = require('mongoose');

var book = mongoose.model('Book');

function retrieve(req, res){
  var bookId = req.params.bookid;

  book.findById(bookId).populate('category').exec(sendResponse);

  function sendResponse(err, book){
    res.status(200);
    res.json(book);
  }
}

module.exports.details = retrieve;
