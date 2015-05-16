module.controller('ScheduleCtrl', ['$scope', 'Coach', 'Booking', '$stateParams',
  function($scope, Coach, Booking, $stateParams) {
    $scope.scheduleData = Coach.schedule({ id: $stateParams.coachId});

    $scope.bookTime = function(startAt, duration){
      conf = confirm("Do you really want to book a session at " + startAt + "?")
      if(conf) {
        var startAt = new Date(startAt);
        var endAt = new Date(startAt.getTime() + duration*60000);
        booking = new Booking( { coach_id: $stateParams.coachId, start_at: startAt, end_at: endAt } )
        booking.$save(function(booking){
            Coach.schedule({ id: $stateParams.coachId}).$promise.then(
              function(schedule){ $scope.scheduleData = schedule; } 
            );
            alert("Successfully booked!")
          },
          function(error){
            $scope.error = error.data;
          }
        );
      }
    }
}]);
