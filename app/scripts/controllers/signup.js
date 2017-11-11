'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsexamApp')
  .controller('SignupCtrl', [
  "Data", "$scope", "$state",
   function (Data, $scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    
    $scope.tablename = "";
    $scope.memo = "";
    $scope.saveUserInfo = function() {
      var dataPromise = Data.setData(
        'http://10.0.2.2:52273/signup',
        '&tablename='+$scope.tablename+'&memo='+$scope.memo);
      dataPromise.then(function(restuls){
        $scope.tablename = "";
        $scope.memo = "";
      },function(reason){},function(update){});
    };

  }]);