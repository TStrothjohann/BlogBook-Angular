describe("The WPCard Factory", function(){
  beforeEach(module('BlogBook'));
  beforeEach(function(){
    inject(function($injector){
      WPCard = $injector.get('WPCard')
    });
  });

  xit("A card has a title", function(){
    
    var blog = "en.blog.wordpress.com"
    var newCard = new WPCard(blog);
    
    expect(newCard.title).toEqual("Social Media Icons Widget");
  });

});