define(
[
	'jquery',
	'underscore',
	'public/eventdispatcher',
	'public/views/example',
	'public/models/example'
],
function(
	$,
	_,
	EventDispatcher,
	ExampleView,
	ExampleModel
) {

	/**
	 * Object to bootstrap the page.
	 **/
	function Example() {};

	_.extend(Example.prototype, {

		//////////////////////////////////////////////////////////////////////
		// Public methods ///////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////

		/**
		 * Initialization method.
		 **/
		initialize : function() {
			var editorView  = new ExampleView({
					el : $('div')
				});

			this._loadPage();
		},

		//////////////////////////////////////////////////////////////////////
		// Psuedo-private methods ///////////////////////////////////////////
		////////////////////////////////////////////////////////////////////

		/**
		 * Load the page.
		 **/
		_loadPage : function() {
			// get a new Example object
			var exampleModel   = new ExampleModel({
				foo : 'The page is loaded!'
			});

			EventDispatcher.trigger('example:load:done', exampleModel);
		}

	});

	return Example;
});