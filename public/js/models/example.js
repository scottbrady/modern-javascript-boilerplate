define(
[
	'backbone'
],
function(
	Backbone
) {
	/**
	 * Object that respresents an example model.
	 **/
	var ExampleModel = Backbone.Model.extend({

		defaults : {
			foo : ''
		}

	});

	return ExampleModel;
});