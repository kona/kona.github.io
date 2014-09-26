var konaApp = angular.module('konaApp', ['ngRoute', 'ngAnimate']);

konaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        css: 'css/index.css'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        css: 'css/about.css'
      }).
      when('/download', {
        templateUrl: 'partials/download.html',
        css: 'css/download.css'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);