(function(global) {
	'use strict';

	var utils = {};

	utils.expand_mobile_menu =  function(menu_id) {
		$("#" + menu_id).toggle( "slide", function() { });
	};

	global.$utils = utils;

})(window);