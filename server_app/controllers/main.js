function layout (req, res){
  res.render('layout', { title: 'Decitre.fr' });
}

module.exports.angular = layout;