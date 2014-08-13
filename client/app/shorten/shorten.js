angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    Links.addLink($scope.link)
      .then(function() {
        $location.path('/');
      });
  };
    /*
    $scope.loading = true; // turn animation on
    Links.addLink($scope.link)
      .then(function() {
        $scope.loading = false; // turn animation off
        $location.path('/'); // reroute to 'otherwise' condition
      })
      .catch(function(error) {
        console.log(error);
      });
    */

  $scope.addLink();
});
