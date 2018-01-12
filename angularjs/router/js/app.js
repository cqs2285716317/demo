/**
 * Created by Administrator on 2016/12/30 0030.
 */
var app = angular.module('myRouter', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('test', {
      abstract: true,
      url: '/test',
      templateUrl: '4.html'
    })
    .state('home', {
      url: '/home',
      // ,
      views: {
        'myTitle': {
          templateUrl: '1.html'
        },
        'center': {
          templateUrl: '2.html'
        },
        'bottom': {
          templateUrl: '3.html'
        }
      },
      'priority': {
        templateUrl: 'router.html'
      }
    })
    .state('priority', {
      url: '/priority',
      template: '<h2>Your priority inbox</h2>'
    });

  $urlRouterProvider.otherwise('/home');
});

app.controller('TwoCtrl', ['$scope', '$interpolate', function ($scope, $interpolate) {
  console.log(11);
  $scope.name = '';
  $scope.$watch('emailBody', function(body) {
    console.log(body);
    if (body) {
      var template = $interpolate(body);
      $scope.previewText = template({to: $scope.to});
    }
  });
  $scope.$watch('name', function () {
    console.log(1);
    $scope.name = $scope.name.match(/^[0-9a-zA-Z]*/)[0];
  })
}]);

app.controller('RouterController', ['$scope', function ($scope) {
  console.log('----');
}]);