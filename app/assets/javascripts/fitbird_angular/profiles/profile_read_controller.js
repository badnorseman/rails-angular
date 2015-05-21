module.controller('ProfileReadCtrl', ['$auth', '$scope', 'Location',
  function($auth, $scope, Location) {
    Location.get({id: $auth.user.id}, function(response) {
      $scope.location = response;
    }, function(error) {
      $scope.error = error.data;
    });
}]);
