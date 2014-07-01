'use strict';

angAuth.controller('menuController', function ($scope, $location, $rootScope, $facebook) {

    $scope.routeIs = function(path){
     if($location.path() === path){
         return true;
     }
    }
    $scope.userDetails = angular.fromJson(localStorage.getItem('FBUserData'));
    //console.log($scope.userDetails);

    $scope.FBlogout = function(){
        FB.getLoginStatus(function(response) {
        //console.log(response);
            if (response && response.status === 'connected') {
                FB.logout(function(response) {
                    //console.log('comming here 3');
                    localStorage.removeItem('FBUserData');
                   $scope.$apply($location.url('/login'));
                });
            }
        });
    }
});
