'use strict';

var phonecatApp = angular.module('phonecatApp',[]);

phonecatApp.controller('PhoneListController', function PhoneListController($scope){
  $scope.phones = [
    {
      name : 'Nexus S',
      snippet: 'Fast just got faster with Nexus S'
    },
    {
      name : 'Motorola XOOMᵀᴹ with wifi',
      snippet: 'The Next, Next generation tablet.'
    },
    {
      name : 'Motorola XOOMᵀᴹ',
      snippet: 'The Next, Next generation tablet.'
    }
  ];
})
