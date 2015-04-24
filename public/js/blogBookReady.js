$( document ).ready(function() {
  
  $('#card-container').imagesLoaded( function() {
    var $container = $('#card-container');
    $container.masonry({
      itemSelector: '.items'
    });
  });
});

