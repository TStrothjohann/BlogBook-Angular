var wrapper = function($http){
  var WPCard = function(url, index){
    this.initialize = function(){
      
      var blogData = $http.get(url);
      var self = this;
      blogData.then(function(response){
        self.title = response.data.posts[index].title
        self.date = new Date(response.data.posts[index].date).toDateString();
        self.text = response.data.posts[index].excerpt.replace(/(<([^>]+)>)/ig,"");
        self.link = response.data.posts[index].URL
        self.author = response.data.posts[index].author.nice_name
        self.photo = response.data.posts[index].featured_image
        if(self.photo == undefined && response.data.posts[index].attachments[Object.keys(response.data.posts[index].attachments)[0]].URL != undefined){
          self.photo = response.data.posts[index].attachments[Object.keys(response.data.posts[index].attachments)[0]].URL
        }else{
          self.photo = ""
        };
      });
    };
    this.initialize();
  };
  return (WPCard);
};

angular
  .module('BlogBook')
  .factory('WPCard',  wrapper)