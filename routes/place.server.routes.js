module.exports = function(app){

 var places = require('./../controllers/places.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/places')
	.get(places.list)
	.post(users.requiresLogin, places.create);

  app.route('/api/places/:placeId')
	.get(places.read)
  .delete(users.requiresLogin, places.delete);

	app.route('/api/places/edit/:placeId')
	.get(places.read)
	.put(users.requiresLogin, places.update);
	
	//Routes to render views
  app.route('/places/new').get(places.new);
  app.route('/places/all').get(places.all);
  app.route('/places/edit/:placeId').get(places.edit);
  app.route('/places/:placeId').get(places.view);


app.param('placeId', places.placeByID);


}
