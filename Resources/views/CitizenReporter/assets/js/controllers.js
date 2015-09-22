angular.module('app.controllers', [])

.controller('LoginCtrl', function($scope, $rootScope, $location, $timeout, User) {
    $timeout(function(){
            $rootScope.animationDirection = '';
        }, 5000);
    $scope.user = {};


    $scope.login = function(){
        User.setLoggedIn();
        $location.path( "/" );

    // User.login($scope.user.email,$scope.user.password ).then(function(status){
    //   switch(status){
    //     case 200:
    //     $location.path( "/" );
    //     break;
    //     case 403:
    //     // $translate('wrong_email').then(function (text) {
    //     //   $scope.messages.login = text;
    //     // });

    //     break;
    //     case 404:
    //     // $translate('user_not_found').then(function (text) {
    //     //   $scope.messages.login = text;
    //     // });

    //     break;
    //     default:
    //     // $translate('went_wrong').then(function (text) {
    //     //   $scope.messages.login = text;
    //     // });

    //   }

    // });

};

})
.controller('AddCtrl', function($scope, $rootScope, $location, $timeout, User, FileReader) {
    $scope.userLoggedIn = User.isLoggedIn();
    $scope.imageSrc = "";
    $timeout(function(){
        $rootScope.animationDirection = '';
    }, 5000);


    if (!$scope.userLoggedIn && global.requireLogin)
        $location.path( "/login" );

    $scope.removePhoto = function(){
        $scope.imageSrc = '';
    };

})
.controller('ReportsCtrl', function($scope, $rootScope, $location, $timeout, User) {
    $scope.userLoggedIn = User.isLoggedIn();
    $timeout(function(){
            $rootScope.animationDirection = 'ltr';
        }, 5000);

    if (!$scope.userLoggedIn)
        $location.path( "/login" );




});