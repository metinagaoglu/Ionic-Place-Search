angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  })
  .controller('SearchCtrl', function($scope, $state) {
    $scope.submit = function(par) {
      $state.go('app.detay', {
        par: par
      });
    }
  })
  .controller('DetayCtrl', function($scope, $stateParams, $http) {
  	$scope.par = $stateParams.par;
    $http.get('https://api.foursquare.com/v2/venues/search?query=' + $stateParams.par + '&near=Bursa&client_id=TLJRWP3BKS20TVNO3JDV1PHT1XZYJRXCDWK4VKZZY2VTQNH2&client_secret=IACQVEXQWYCYJDOFCKXBTRLGIPZJ3CGZULDCQC2CXGZW2TFP&v=20160502')
      .success(function(response) {
        $scope.venues = response.response.venues;
      });
  })
  .controller('ResultCtrl', function($scope, $stateParams, $http) {
    $http.get('https://api.foursquare.com/v2/venues/' + $stateParams.id + '/?client_id=TLJRWP3BKS20TVNO3JDV1PHT1XZYJRXCDWK4VKZZY2VTQNH2&client_secret=IACQVEXQWYCYJDOFCKXBTRLGIPZJ3CGZULDCQC2CXGZW2TFP&v=20160502')
      .success(function(data) {
        $scope.detay = data.response.venue;
        // $scope.resim = data.response.venue.bestPhoto.prefix;
      });
    /* Resimler */
    $http.get('https://api.foursquare.com/v2/venues/' + $stateParams.id + '/photos?client_id=TLJRWP3BKS20TVNO3JDV1PHT1XZYJRXCDWK4VKZZY2VTQNH2&client_secret=IACQVEXQWYCYJDOFCKXBTRLGIPZJ3CGZULDCQC2CXGZW2TFP&v=20160502')
      .success(function(response) {
        $scope.resim = response.response.photos.items;
      });
    /* Yorumlar */
    $http.get('https://api.foursquare.com/v2/venues/' + $stateParams.id + '/tips?client_id=TLJRWP3BKS20TVNO3JDV1PHT1XZYJRXCDWK4VKZZY2VTQNH2&client_secret=IACQVEXQWYCYJDOFCKXBTRLGIPZJ3CGZULDCQC2CXGZW2TFP&v=20160502')
      .success(function(data) {
        $scope.yorumlar = data.response.tips.items;
      });
    $scope.map = function() {
      alert("Yükleniyor..");
      var map = new GMap2(document.getElementById("map"));
      map.setCenter(new GLatLng($scope.detay.location.lat, $scope.detay.location.lng), 18);
    }

  });