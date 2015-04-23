describe('blogbook homepage', function() {

  beforeEach( function() {
    browser.get('http://localhost:3000');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('BlogBook');
  });

  it('shows posts', function() {
    expect(element.all(by.css('.items')).count()).toEqual(9);
  });

  it('shows the title of each post', function() {
    expect(element.all(by.binding('card.title')).first().getText()).toEqual('Pacman and Instagram');
  });

  it("shows a read more link - linking back to the blog", function(){
    expect(element.all(by.binding('card.link')).first()).not.toEqual("");
  });

  it("can filter by author", function(){
    element(by.id('profile-tab')).click();
    element(by.id('profile')).all(by.tagName('div')).first().click();
    expect(element.all(by.css('.items')).count()).toEqual(1);
  });

});
