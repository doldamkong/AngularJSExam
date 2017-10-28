'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsexamApp')
  .controller('LoginCtrl',
  	['$scope','$state', 'sessionInfo', 'sessionService',

   function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if(sessionInfo.isUserSignedIn()){
    	$state.go('main');
    } 
    else {}
    $scope.submitLogin = function(){}
	$scope.isUserSignedIn = function(){}
	$scope.getUseId = function(){}
	$scope.logout = function(){}
    





  }]);
