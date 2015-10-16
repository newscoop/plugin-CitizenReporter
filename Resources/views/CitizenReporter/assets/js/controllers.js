angular.module('app.controllers', [])

.controller('LoginCtrl', function($scope, $rootScope, $location, $timeout, User) {
    $timeout(function(){
            $rootScope.animationDirection = '';
        }, 400);

    $rootScope.currentPath = $location.path();
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
    $rootScope.userLoggedIn = User.isLoggedIn();
    $scope.imageSrc = "";

    $rootScope.currentPath = $location.path();
    $timeout(function(){
        $rootScope.animationDirection = '';
    }, 400);


    if (!$rootScope.userLoggedIn && global.requireLogin)
        $location.path( "/login" );

    $scope.removePhoto = function(){
        $scope.imageSrc = '';
    };

})
.controller('ReportsCtrl', function($scope, $rootScope, $location, $timeout, User) {
    $rootScope.userLoggedIn = User.isLoggedIn();
    $rootScope.currentPath = $location.path();
    $scope.sortType={status:''};

    $timeout(function(){
            $rootScope.animationDirection = 'ltr';
        }, 400);

    if (!$rootScope.userLoggedIn)
        $location.path( "/login" );

    $scope.reports = [
        {id: 1, status:'accepted', date_sent: '07.10.2015', date_review: '17.10.2015', message: 'lorem lipsum tralalalala lorem lipsum tralalalala lorem lipsum tralalalala lorem  lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala lipsum tralalalala lorem lipsum tralalalala ', img: 'http://lorempixel.com/800/800/'},
        {id: 2, status:'rejected',date_sent: '07.10.2015', date_review: '17.10.2015', message: 'lorem lipsum tralalalala lorem lipsum tralalalala lorem lipsum tralalalala', img: 'http://lorempixel.com/800/800/'},
        {id: 3, status:'pending',date_sent: '07.10.2015', message: 'lorem lipsum tralalalala lorem lipsum tralalalala', img: 'http://lorempixel.com/800/800/'},
    ];




});