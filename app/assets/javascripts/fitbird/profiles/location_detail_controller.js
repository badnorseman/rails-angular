module.controller('LocationDetailCtrl', ['$auth', '$scope', 'Location',
  function($auth, $scope, Location) {
    Location.get({id: $auth.user.id}, function(response) {
      $scope.location = response;
    }, function(error) {
      $scope.location = new Location();
    });

    $scope.save = function() {
      if ($scope.location.id) {
        $scope.location.$update({id: $auth.user.id}, function(response) {
          $scope.location = response;
        }, function(error) {
          $scope.error = error.data;
        });
      }
      else {
        $scope.location.$save({id: $auth.user.id}, function(response) {
          $scope.location = response;
        }, function(error) {
          $scope.error = error.data;
        });
      }
    };

    // Not implemented in API
    $scope.delete = function(location) {
      $scope.location.$delete({id: $auth.user.id}, function(response) {
      }, function(error) {
        $scope.error = error.data;
      });
    };
}]);
