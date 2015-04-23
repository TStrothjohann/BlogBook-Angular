describe('StreamController', function() {
  beforeEach(module('BlogBook'));

  var scope, ctrl, httpBackend;

  beforeEach(
    inject(
      function($rootScope, $controller, WPCard, $httpBackend) {
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        ctrl = $controller('streamController', {
          $scope: scope, WPCard: WPCard
        });

        httpBackend
        .when("GET", "https://public-api.wordpress.com/rest/v1.1/sites/katebeavis.wordpress.com/posts/")
        .respond(
        { posts: [
            {
              ID: 85,
              title: "Huhu World",
              author: {nice_name: "autorenname"},
              date: "2015-02-16T22:41:02+00:00",
              excerpt: "great excerpt",
              featured_image: "https://1.gravatar.com/avatar/abf885ab5df3753ff1644e12d9e9c46c?s=96&d=identicon&r=G",
              URL: "http://lilylostinlondon.wordpress.com"
            }
          ]
        });
  }));

  beforeEach(function() {
    scope.blogs = ['katebeavis.wordpress.com'];
  });

  it('can construct a wordpress.com API url', function(){
    scope.constructWPAPICalls();
    expect(scope.calls[0]).toEqual('https://public-api.wordpress.com/rest/v1.1/sites/katebeavis.wordpress.com/posts/')  
  });

  it('it constructs API-calls for each wordpress.com-blog on startup', function(){
    scope.constructWPAPICalls();
    expect(scope.blogs.length).toEqual(scope.calls.length)
  });

  it('initialises with cards and no filter set', function() {
    expect(scope.cards).not.toBeUndefined();
    expect(scope.filters).toEqual({});
  });

  it('displays content from API call', function(){
    var cardslength = scope.cards.length
    var url = 'https://public-api.wordpress.com/rest/v1.1/sites/katebeavis.wordpress.com/posts/'
    scope.addWPCard(url, 0);
    httpBackend.flush();
    expect(scope.cards.length).toEqual(cardslength + 1)
    
  });

});