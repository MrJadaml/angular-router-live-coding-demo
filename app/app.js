(function() {
  'use strict';

  angular
    .module('adamApp', ['ngRoute'])
    .config(config)

    config.$inject = ['$routeProvider', '$locationProvider']

    function config($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: 'app/foo-feature/foo.html',
        controllerAs: 'ThingBlahStuffRad',
        controller: 'Foo'
      }).when('/bar', {
        templateUrl: 'app/bar-feature/bar.html',
        controllerAs: 'Bar',
        controller: 'Bar'
      }).otherwise({
        templateUrl: 'app/baz-feature/baz.html',
        controllerAs: 'Baz',
        controller: 'Baz'
      });
      $locationProvider.html5Mode(true);
    };

})();
