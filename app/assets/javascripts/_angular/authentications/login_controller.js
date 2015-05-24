module.controller('LoginCtrl', ['$auth', '$scope', '$state',
  function($auth, $scope, $state) {
    $scope.handleLogin = function() {
      $auth.submitLogin($scope.login)
        .then(function(response) {
          $state.go('dashboard');
        })
        .catch(function(error) {
          $scope.error = error.errors[0];
        });
    };
}]);
