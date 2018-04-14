angular.module('movies', [])

.component('addmovie', {
	bindings: {
    movies: '<' 
  },
  templateUrl: 'templates/addmovie.html',
  controller: function($http) {
    let $ctrl = this;
   // var duplicate = false;
   
   //  let checkList = function(movies, movie) {
   //   movies.each((movie) => {
   //      if (movie.movie ===movie) {
   //        duplicate = true;
   //      },
      $ctrl.addmovie = function(movieinput){

              $ctrl.movies.push($ctrl.movieinput)
   
      }
    }})
    

