'use strict';

describe('Controller: SighnupCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJsexamApp'));

  var SighnupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SighnupCtrl = $controller('SighnupCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SighnupCtrl.awesomeThings.length).toBe(3);
  });
});
