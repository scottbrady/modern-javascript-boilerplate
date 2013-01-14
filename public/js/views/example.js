define(
[
	'underscore',
	'backbone',
	'text!templates/example.html',
	'public/eventdispatcher'
],
function(
	_,
	Backbone,
	ExampleTemplate,
	EventDispatcher
) {
	/**
	 * Object that handles the example view.
	 **/
	var ExampleView = Backbone.View.extend({

		//////////////////////////////////////////////////////////////////////
		// Public methods ///////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////

		/**
		 * Initialization method.
		 **/
		initialize : function(options) {
			this._exampleTemplate = _.template(ExampleTemplate);
			this._registerEvents();
		},

		/**
		 * Render the page.
		 **/
		render : function(exampleModel) {
			var self = this,
				html = this._exampleTemplate(exampleModel.toJSON());

			$(this.el).html(html);
		},

		//////////////////////////////////////////////////////////////////////
		// Psuedo-private methods ///////////////////////////////////////////
		////////////////////////////////////////////////////////////////////

		/**
		 * Register events.
		 **/
		_registerEvents : function() {
			EventDispatcher.on(
				'example:load:done',
				_.bind(this.render, this)
			);
		}
	});

	return ExampleView;
});