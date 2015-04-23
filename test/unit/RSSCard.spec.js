describe('RSSCard', function(){

  var RSSCard;
  beforeEach(module('BlogBook'));
  beforeEach(inject(function(_RSSCard_){
    RSSCard = _RSSCard_;
  }));

  describe('Constructor', function(){

    it('assigns an URL', function(){
      var url = 'http://codereporter.de/?feed=rss2';
      var testPost = new RSSCard(url);
      expect(testPost.address).toEqual(url)
    });
  
  });

});