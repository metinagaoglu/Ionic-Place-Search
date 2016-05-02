angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})
.controller('DetayCtrl', function($scope, $stateParams, $http){
  $http.get('https://api.foursquare.com/v2/venues/search?query='+$stateParams.par+'&near=Bursa&client_id=TLJRWP3BKS20TVNO3JDV1PHT1XZYJRXCDWK4VKZZY2VTQNH2&client_secret=IACQVEXQWYCYJDOFCKXBTRLGIPZJ3CGZULDCQC2CXGZW2TFP&v=20160502')
  .success(function(response){
    $scope.venues = response.response.venues;
  });
})
.controller('SearchCtrl', function($scope, $state) {
  $scope.submit = function(par){
    $state.go('app.detay', {par: par});
  }
});
