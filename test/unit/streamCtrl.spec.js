describe('StreamController', function() {
  beforeEach(module('BlogBook'));

  var scope, ctrl;
  var mockWPCard = function(){
    this.title = "Pacman Test",
    this.date = "2015-02-20T00:54:00+00:00",
    this.text = "This is the text of my Pacman Test" ,
    this.link = "https://katebeavis.wordpress.com/2015/02/16/day-eleven-weekend-review/",
    this.author = "My name is test",
    this.photo = "https://katebeavis.files.wordpress.com/2015/02/enhanced-12788-1423504899-18-2.jpg" 
    };

  beforeEach(
    inject(
      function($rootScope, $controller, WPCard) {
        scope = $rootScope.$new();
        ctrl = $controller('streamController', {
          $scope: scope, WPCard: mockWPCard
        });

  }));

  beforeEach(function() {
    scope.blogs = ['katebeavis.wordpress.com'];
  });

  it('can construct a wordpress.com API url', function(){
    expect(scope.calls[0]).toEqual('https://public-api.wordpress.com/rest/v1.1/sites/katebeavis.wordpress.com/posts/')  
  });

  // it('it constructs API-calls for each wordpress.com-blog on startup', function(){
  //   expect(scope.blogs.length).toEqual(scope.calls.length)
  // });

  it('initialises with cards and no filter set', function() {
    expect(scope.cards).not.toBeUndefined();
    expect(scope.filters).toEqual({});
  });

  it('creates a Wordpress card', function(){
    scope.addWPCard()
    expect(scope.cards[0].title).toEqual("Pacman Test")
  });

});