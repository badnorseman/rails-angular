module.controller('UserDetailCtrl', ['$auth', '$scope', 'User',
  function($auth, $scope, User) {
    $scope.update = function() {
      $scope.user.$update({id: $auth.user.id}, function(response) {
      }, function(error) {
        $scope.error = error.data;
      });
    };
}]);
