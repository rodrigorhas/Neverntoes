angular.module("Nevernotes").directive("icon", function () {
	return {
		restrict: 'E',
		replace: true,

		template: '<i class="zmdi zmdi-{{name}}"></i>',

		scope: {
			name: '@'
		}
	}
});