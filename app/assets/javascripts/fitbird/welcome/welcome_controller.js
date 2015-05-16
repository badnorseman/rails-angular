module.controller('WelcomeCtrl', ['$auth', '$scope',
  function($auth, $scope) {
    $scope.app = "FitBird";
    $scope.user.signedIn = $auth.user.signedIn;
}]);
