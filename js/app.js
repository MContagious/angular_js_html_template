'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home',
    	{templateUrl: 'partials/home.html',
    	 controller: 'HomeCtrl',
    	 activetab: 'home'});
    $routeProvider.when('/services/service1',
     	{templateUrl: 'partials/service1.html',
     	 controller: 'Services1Ctrl',
     	 activetab: 'services'});
    $routeProvider.when('/services/service2',
     	{templateUrl: 'partials/service2.html',
     	 controller: 'Services2Ctrl',
     	 activetab: 'services'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);