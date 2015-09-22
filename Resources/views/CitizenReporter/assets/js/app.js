angular.module('app', ['ngRoute', 'app.controllers', 'app.services','app.directives', 'ngAnimate'])
.config(function($interpolateProvider, $locationProvider, $routeProvider){


  $locationProvider.html5Mode(false);
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');

  $routeProvider
  .when('/', { templateUrl: 'add.html', controller: 'AddCtrl' })
  .when('/login', { templateUrl: 'login.html', controller: 'LoginCtrl' })
  .when('/reports', { templateUrl: 'reports.html', controller: 'ReportsCtrl' })
  .otherwise({
    redirectTo: '/'
  });



})
.run(function($rootScope) {
  FastClick.attach(document.body);
  console.log('run');
});