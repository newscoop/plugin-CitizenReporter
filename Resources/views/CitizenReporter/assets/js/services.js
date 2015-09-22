angular.module('app.services', [])
.factory('User', function($http, $q, $rootScope) {

  var user = {
    loggedin : global.userLoggedIn ? global.userLoggedIn : false,
    id : global.userId ? global.userId : false
  };


  var isLoggedIn = function(){
    return user.loggedin;
  };

  var setLoggedIn = function(){
    user.loggedin = true;
  };

  var login = function(email, pass) {
    $rootScope.loading = true;

    var q = $q.defer();

    $http.post('/api/users/login.json', {
      username: email,
      password: pass
    }).
    success(function(data, status, headers, config) {
      user.loggedin = true;
      $rootScope.loading = false;
      q.resolve(status);

    }).
    error(function(data, status, headers, config) {
      $rootScope.loading = false;
      user.loggedin = false;
      q.resolve(status);
    });



    return q.promise;
  };

  var register = function(email) {
    $rootScope.loading = true;
    var q = $q.defer();
    $http.post('/api/users/register.json', {
      email: email
    }).
    success(function(data, status, headers, config) {
      $rootScope.loading = false;
      q.resolve(status);
    }).
    error(function(data, status, headers, config) {
      $rootScope.loading = false;
      q.resolve(status);
    });

    return q.promise;
  };


  var getInfo = function(id) {
    $rootScope.loading = true;
    var q = $q.defer();
    $http.get('/api/users/'+user.id+'.json').
    success(function(data, status, headers, config) {
      $rootScope.loading = false;
      q.resolve(data);
    }).
    error(function(data, status, headers, config) {
      $rootScope.loading = false;
      q.reject(data);
    });

    return q.promise;
  };

  return {
    login: login,
    register: register,
    isLoggedIn : isLoggedIn,
    setLoggedIn : setLoggedIn
  };

}).factory('FileReader', function($q, $log){

          var onLoad = function(reader, deferred, scope) {
              return function () {
                  scope.$apply(function () {
                      deferred.resolve(reader.result);
                  });
              };
          };

          var onError = function (reader, deferred, scope) {
              return function () {
                  scope.$apply(function () {
                      deferred.reject(reader.result);
                  });
              };
          };

          var onProgress = function(reader, scope) {
              return function (event) {
                  scope.$broadcast("fileProgress",
                      {
                          total: event.total,
                          loaded: event.loaded
                      });
              };
          };

          var getReader = function(deferred, scope) {
              var reader = new FileReader();
              reader.onload = onLoad(reader, deferred, scope);
              reader.onerror = onError(reader, deferred, scope);
              reader.onprogress = onProgress(reader, scope);
              return reader;
          };

          var readAsDataURL = function (file, scope) {
              var deferred = $q.defer();

              var reader = getReader(deferred, scope);
              reader.readAsDataURL(file);

              return deferred.promise;
          };

          return {
              readAsDataUrl: readAsDataURL
          };

});