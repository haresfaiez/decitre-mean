var renderLayout = function(req, res){
                     res.render('layout', { title: 'Decitre.fr' });
                   }
var categoryJson = function(req, res){
  var books=[];
res.status(400);
  res.json(books);
}

module.exports.angular = renderLayout;
module.exports.category = categoryJson;