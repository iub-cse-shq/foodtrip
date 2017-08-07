module.exports = function(app){

 var foods = require('./../controllers/foods.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/foods')
	.get(foods.list)
	.post(users.requiresLogin, foods.create);

  app.route('/api/foods/:foodId')
	.get(foods.read)
  .delete(users.requiresLogin, foods.delete);

	app.route('/api/foods/edit/:foodId')
	.get(foods.read)
	.put(users.requiresLogin, foods.update);
	
	//Routes to render views
  app.route('/foods/new').get(foods.new);
  // app.route('/foods/all').get(foods.all);
  // app.route('/foods/edit/:foodId').get(foods.edit);
  // app.route('/foods/:foodId').get(foods.view);


app.param('foodId', foods.foodByID);


}
