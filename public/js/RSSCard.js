angular
  .module('BlogBook')
  .factory('RSSCard', function(){
    return function RSSCard(url){
      this.address = url;
    };
  });
