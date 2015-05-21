module.controller('RegistrationCtrl', ['$auth', '$scope', '$state', '$stateParams',
  function($auth, $scope, $state, $stateParams) {
    var role = $stateParams.role;

    $scope.submitRegistrationOAuth = function(provider) {
      $auth.authenticate(provider)
      .then(function(response) {
        dashboard();
      })
      .catch(function(error) {
        $scope.error = error.errors[0];
      });
    };

    $scope.submitRegistration = function() {
      $auth.submitRegistration($scope.registration)
        .then(function(response) {
          $auth.submitLogin({
            email: $scope.registration.email,
            password: $scope.registration.password})
          .then(function(response) {
            dashboard();
          })
          .catch(function(error) {
            $scope.error = error.errors[0];
          });
        })
        .catch(function(error) {
          $scope.error = error.errors[0];
        });
    };

    dashboard = function() {
      if (role == 'coach') {
        $state.go('dashboard');
      }
      if (role == 'user') {
        $state.go('dashboard');
      }
    };
}]);
