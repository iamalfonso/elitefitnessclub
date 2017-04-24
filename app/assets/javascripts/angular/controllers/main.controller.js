(function() {
	'use strict';

	angular.module('efc')
	.controller('MainController', MainController);

	MainController.$inject = ['$location','$anchorScroll'];
	function MainController ($location, $anchorScroll) {
		var main = this;

		main.scrollTo = function(id) {
			$location.hash(id);
			$anchorScroll();
		};

	}; //MainController

})();