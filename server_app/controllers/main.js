var renderLayout = function(req, res){
                     res.render('layout', { title: 'Decitre.fr' });
                   }
var categoryJson = function(req, res){
  var books = [{category: "javascript", books: ['Angular in action', 'Getting MEAN']}];
res.status(200);
  res.json(books);
}

module.exports.angular = renderLayout;
module.exports.category = categoryJson;