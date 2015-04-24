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
        httpBackend
        .when("GET", "https://public-api.wordpress.com/rest/v1.1/sites/detachedhead.wordpress.com/posts/")
        .respond(
        { posts: [
            {
              ID: 85,
              title: "Huhu World Two",
              author: {nice_name: "guacamolay"},
              date: "2015-02-16T22:41:02+00:00",
              excerpt: "great excerpt Two",
              featured_image: "",
              URL: "http://lilylostinlondon.wordpress.com",
              attachments: {67: {URL: 'https://detachedhead.files.wordpress.com/2015/03/imag4064.jpg'}}
            }
          ]
        });
         httpBackend
        .when("GET", "https://public-api.wordpress.com/rest/v1.1/sites/joejknowles.wordpress.com/posts/")
        .respond(
        { posts: [
            {
              ID: 99,
              title: "Huhu World Three",
              author: {nice_name: "image-less"},
              date: "2015-02-16T22:41:02+00:00",
              excerpt: "great excerpt Three",
              featured_image: "",
              URL: "http://lilylostinlondon.wordpress.com",
              attachments: {}
            }
          ]
        });
  }));

  it('displays content from API call', function(){
    var url = 'https://public-api.wordpress.com/rest/v1.1/sites/katebeavis.wordpress.com/posts/'
    testCard = new WPCard(url, 0)
    httpBackend.flush();
    expect(testCard.title).toEqual("Huhu World")    
  });

  it('assigns a featured_image to blogData.photo', function() {
    var url = 'https://public-api.wordpress.com/rest/v1.1/sites/katebeavis.wordpress.com/posts/'
    testCard = new WPCard(url, 0)
    httpBackend.flush();
    expect(testCard.photo).toEqual('https://1.gravatar.com/avatar/abf885ab5df3753ff1644e12d9e9c46c?s=96&d=identicon&r=G')
  });

  it("assigns any attached image if featured_image doesn't exist to blogData.photo", function() {
    var url = 'https://public-api.wordpress.com/rest/v1.1/sites/detachedhead.wordpress.com/posts/'
    testCard = new WPCard(url, 0)
    httpBackend.flush();
    expect(testCard.photo).toEqual('https://detachedhead.files.wordpress.com/2015/03/imag4064.jpg')
  });

  it("assigns an emty string to blogData.photo if feed contains no image", function() {
    var url = 'https://public-api.wordpress.com/rest/v1.1/sites/joejknowles.wordpress.com/posts/'
    testCard = new WPCard(url, 0)
    httpBackend.flush();
    expect(testCard.photo).toEqual('')
  });

});