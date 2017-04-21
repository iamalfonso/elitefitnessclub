(function() {
	'use strict';

	angular.module('efc')
	.service('UtilsService', UtilsService);

	UtilsService.$inject = [];
	function UtilsService() {
		var utils = this;

		utils.pad =  function(n, width, z) {
			z = z || '0';
			n = n + '';
			return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
		};

	};
})();
