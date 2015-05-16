module.factory('Booking', ['$resource', function($resource)  {
  return $resource('/api/bookings/:id/:parameter.json', {id:'@id'}, {
    'query': { method: 'GET', isArray: true },
    'confirm': { method: 'POST', params: { parameter: 'confirm' }  },
  });
}]);
