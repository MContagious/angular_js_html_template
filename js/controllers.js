'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeCtrl', [function($scope, $route) {

  }])
  .controller('Services1Ctrl', [function($scope, $route) {

  }])
  .controller('Services2Ctrl', [function($scope, $route) {

  }]);

  function MenuCtrl ($scope, $route, $routeParams, $location) {
  	$scope.$route = $route;
  };