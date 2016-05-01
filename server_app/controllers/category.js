var categoryJson = function(req, res){
  var books = [{category: "javascript", books: ['Angular in action', 'Getting MEAN']},
               {category: "scala", books: ['Scala in action', 'Getting Scala']}];
  res.status(200);
  res.json(books);
}

module.exports.books = categoryJson;
