module.controller('BookingListCtrl', ['$scope', '$state', '$auth', 'Booking',
  function($scope, $state, $auth, Booking) {
    $scope.bookings = Booking.query();
    $scope.currentDate = Date();

    $scope.cancelBooking = function(booking){
      var conf = confirm("Are you sure?")
      if(conf){
        booking.$delete(function(result){
          alert("Booking successfully canceled.")
          Booking.query(
            function(bookings){ $scope.bookings = bookings; }
          );
        }, 
        function(error){
          $scope.error = error.data;
        });
      }
    }

    $scope.rescheduleBooking = function(booking){
      var conf = confirm("Are you sure? This booking will be canceled and you'll be able to book new time.")
      if(conf){
        booking.$delete(function(result){
          alert("Booking successfully canceled. Please select new time for your booking.")
          $state.go("schedule", { coachId: result.coach_id } );
        }, 
        function(error){
          $scope.error = error.data;
        });
      };
    };

    $scope.confirmBooking = function(booking){
      var conf = confirm("Are you sure?")
      if(conf){
        booking.$confirm(function(result){
          alert("Booking successfully confirmed.")
          Booking.query(
            function(bookings){ $scope.bookings = bookings; }
          );
        }, 
        function(error){
          $scope.error = error.data;
        });
      };
    };

    $scope.dateInFuture = function(date){
      var date = Date.parse(date);
      var now = new Date().getTime();
      return (date > now);
    }

    $scope.userCanConfirmBooking = function(booking){
      return $auth.user.role == "coach" && booking.confirmed_at == null
    }

    $scope.userCanRescheduleBooking = function(booking){
      return $auth.user.role == "user"
    }
}]);
