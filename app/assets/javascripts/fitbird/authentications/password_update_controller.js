module.controller('PasswordUpdateCtrl', ['$auth', '$scope', '$state',
  function($auth, $scope, $state) {
    $scope.handlePasswordUpdate = function() {
      $auth.updatePassword($scope.passwordUpdate)
        .then(function(response) {
          $state.go('welcome');
        })
        .catch(function(error) {
          $scope.error = error.errors[0];
        });
    };
}]);
