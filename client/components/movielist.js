angular.module('movies')
.component('movieList', {
  templateUrl: 'client/templates/movieList.html',
  controller: function() {
  bindings: {
    tasks: '<'
  }
 
}});