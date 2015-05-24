module.factory('Coach', ['$resource', function($resource)  {
  return $resource('/api/coaches/:id/:parameter.json', {id:'@id'}, {
    'query': {method: 'GET', isArray: true},
    'schedule': { params: { parameter: 'schedule'}  }
  });
}]);
