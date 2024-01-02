$(document).ready(function() {

/********************************************

HOLY MOUNTAIN ANALYTICS

NOTES:
	Make sure you have all autotagger instances run before you 
	initialize the .eventfire_ready function to ensure all tags are caught.

	Use label_format var to set custom label formatting.
	Refer to main script for formatting example.

********************************************/
	
	/***** SET TAGS*****/
		
		/***** GENERAL *****/
			var category		= "General";
			var action			= "Click";
			var value			= "";
			var label_format	= "";

			$('body a').autotagger(category, action, value, label_format);
	
	/***** INITIALIZE *****/
		$('html').eventfire_ready();

	/***** URL PARAMETER TAGS *****/
		$('html').url_param_tag();
});

$(window).load(function() {
	$(".loader").delay(3000).fadeOut("fast");
});