module.factory('Location', ['$resource', function($resource)  {
  return $resource('/api/users/:id/location.json', {id:'@id'}, {
    'query': {method: 'GET', isArray: true},
    'update': {method:'PUT'}
  });
}]);
