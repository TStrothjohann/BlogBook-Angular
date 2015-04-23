describe('WPCard', function() {
  var httpBackend, WPCard;

  beforeEach(module('BlogBook'));
  beforeEach(function(){
    inject(function($injector) {
      WPCard = $injector.get('WPCard');
    });
  });

  beforeEach(
    inject(
      function($httpBackend) {
        httpBackend = $httpBackend;
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

  it('displays content from API call', function(){
    var url = 'https://public-api.wordpress.com/rest/v1.1/sites/katebeavis.wordpress.com/posts/'
    testCard = new WPCard(url)
    httpBackend.flush();
    expect(testCard.title).toEqual("Huhu World")    
  });

});