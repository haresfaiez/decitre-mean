var mongoose       = require('mongoose');

var book     = mongoose.model('Book');
var category = mongoose.model('Category');

var booksPerCategory = function(req, res){
  var result        = [];
  var categoryCount = 0;
  var categorySize  = 0;

  category.count({}, function(err, count){
                       respondAfter(count);
                       findResultAndRespond();
                     });

  function respondAfter(limit){
    categorySize = limit;
  }

  function findResultAndRespond(){
    category.find({}).stream().on("data", appendAndRespond);
  }

  function appendAndRespond(category){
    book.find({'category':{$in: [category._id]}})
        .exec(function(err, categoryBooks){
                appendCategory({category: category.title, books: categoryBooks});
        });
  }

  function appendCategory(category){
    addToResult(category);
    notifyNew();
    respondIfLast();
  }

  function addToResult(element){
    result = result.concat([element]);
  }

  function notifyNew(){
    categoryCount = categoryCount + 1;
  }

  function respondIfLast(){
    if (categoryCount >= categorySize)
      respond();
  }

  function respond(){
    res.status(200);
    res.json(result);
  }
}

module.exports.all = booksPerCategory;
