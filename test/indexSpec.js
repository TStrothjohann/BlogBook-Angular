describe('blogbook homepage', function() {

  beforeEach( function() {
    browser.get('http://localhost:3000');
  })

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('BlogBook');
  });

  it('should show a post', function() {
    expect(element.all(by.css('.items')).count()).toEqual(9);
  });

  xit('should show the title of the post', function() {
    expect(element.all(by.id('title')).first().getText()).toEqual('Reflections: Context Switching');
  });

});
