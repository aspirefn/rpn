var rpnApp = angular.module('RpnApp', []);

rpnApp.controller('CalcController', ['$scope', '$http', function($scope, $http) {
  $scope.entryCompleted = false;

  $scope.onNumberClick = function(number) {
     if ($scope.entryCompleted) {
       $scope.entry = '';
       $scope.entryCompleted = false;
     }

     var current_entry = $scope.entry || '';
     $scope.entry = current_entry + number;
  };

  $scope.onOperatorClick = function(operator) {
    $http.get('/input/' + operator)
      .success(function(data, status, headers, config) {
        $scope.entry = data;
        console.log(data);
      })
      .error(function(data, status, headers, config) {
        console.log('failed onOperatorClick');
      });
  };    

  $scope.onEnterClick = function() {
    $http.get('/input/' + $scope.entry)
      .success(function(data, status, headers, config) {
        $scope.entryCompleted = true;
        console.log(data);
      })
      .error(function(data, status, headers, config) {
        console.log('failed onEnterClick');
      });

    $scope.entry = '';
  };
        
}]);
