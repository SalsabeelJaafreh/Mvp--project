angular.module('movies', [])
.component('app', {
  templateUrl: '../templates/app.html',
  controller: function() {
    let $ctrl = this;
    $ctrl.movies = [];
    // $http.get('/api/movies').then(function(res) {
    //   res.data.forEach((m) => {
    //     $ctrl.movies.push(m);
    //   })
   
  }
});
///back`