'use strict';
//https://developers.google.com/+/web/signin/javascript-flow

angAuth.controller('loginController', function ($scope, $location, $facebook, $rootScope) {

    /*
    * Function called when the user clicks on the login button to login the application.
    * */
    $scope.FBlogin = function() {
        $facebook.login().then(function() {
            $facebook.api("/me").then(
                function(response) {
                    localStorage.setItem('FBUserData', angular.toJson(response));
                    $location.url('/home');
                },
                function(err) {
                    $scope.welcomeMsg = "Please log in";
                });
        });
    }

});
