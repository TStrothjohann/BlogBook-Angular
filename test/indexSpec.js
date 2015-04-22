describe('blogbook homepage', function() {

  beforeEach( function() {
    browser.get('http://localhost:3000');
  })

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('BlogBook');
  });

  it('shows posts', function() {
    expect(element.all(by.css('.items')).count()).toEqual(9);
  });

  it('should show the title of each post', function() {
    expect(element.all(by.binding('card.title')).first().getText()).toEqual('Pacman and Instagram');
  });

});
