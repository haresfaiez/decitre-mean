var mongoose       = require('mongoose');

var book     = mongoose.model('Book');
var category = mongoose.model('Category');

var jsonResponse = function(req, res){
  var result        = [];
  var categoryCount = 0;
  var categorySize  = 0;
  var token         = req.params.token;

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
    book.find({'category':{$in: [category._id]}, 'title':{'$regex': token}})
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
    if(element.books.length > 0)
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

module.exports.byname = jsonResponse;
