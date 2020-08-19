$(document).ready(function() {

	/********************************************

	GA AUTO-TAGGER

	********************************************/

	/***** BODY *****/
		var category  = "General";
		var action    = "Click";
		var value   = "NULL";

		$('body a').autotagger(category, action, value);

	/***** INITIALIZE *****/
		$('html').eventfire_init();
		
});