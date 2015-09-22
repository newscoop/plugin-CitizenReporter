angular.module('app.directives', [])
.directive("ngFileSelect", function(FileReader, $timeout) {
    return {
      scope: {
        ngModel: '='
      },
      link: function($scope, el) {
        function getFile(file) {
          FileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
              $timeout(function() {
                $scope.ngModel = result;
              });
            });
        }

        el.bind("change", function(e) {
          var file = (e.srcElement || e.target).files[0];
          getFile(file);
        });
      }
    };
  });