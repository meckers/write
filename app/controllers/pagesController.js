var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Locomotive';
  this.page = 'main';				// <--- VIKTIG! Ser till att require laddar rätt script i pages-foldern för varje sida.
  this.render();
}

module.exports = pagesController;
