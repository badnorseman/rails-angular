module.controller('CoachListCtrl', ['$scope', 'Coach',
  function($scope, Coach) {
    $scope.coaches = Coach.query();
}]);
