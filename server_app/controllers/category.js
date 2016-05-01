var mongoose       = require('mongoose');

var bookSchema     = mongoose.model('Book');
var categorySchema = mongoose.model('Category');

var booksPerCategory = function(req, res){
  var books = [{category: "javascript", books: ['Angular in action', 'Getting MEAN']},
               {category: "scala", books: ['Scala in action', 'Getting Scala']}];
  categorySchema.find({}, function(err, result) {
                        console.log('categories' + result);
                        res.status(200);
                        res.json(books);
                      });

}

module.exports.all = booksPerCategory;
