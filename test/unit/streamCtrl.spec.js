describe('StreamController', function() {
  beforeEach(module('BlogBook'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('streamController', {
        $scope: scope
    });
  }));

  it('can construct a wordpress.com API call address', function(){
    expect(scope.calls[0]).toEqual('https://public-api.wordpress.com/rest/v1.1/sites/katebeavis.wordpress.com/posts/')  
  });

  it('it constructs API-calls for each wordpress.com-blog on startup', function(){
    expect(scope.blogs.length).toEqual(scope.calls.length)
  });

  it('initialises with cards and no filter set', function() {
    expect(scope.cards).not.toBeUndefined();
    expect(scope.filters).toEqual({});
  });

});