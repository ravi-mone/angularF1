
'use strict'; //This strict context prevents certain actions from being taken and throws more exceptions.

var angAuth = angular.module('angularAuthApp', [
    'ngResource', //ngResource module when querying and posting data to a REST API.
    'ngRoute',      //ngRoute to enable URL routing to your application
    //'ngTable',
    'ngFacebook',
    'angular-loading-bar',
    'uiSlider'

]);

angAuth.config(function ($routeProvider, $locationProvider, $facebookProvider) {
    $routeProvider.
        when('/login', { templateUrl: 'views/login.html', controller: 'loginController', login: true}).
        when('/explain', { templateUrl: 'views/explain.html', controller: 'explainedController'}).
        when('/home', { templateUrl: 'views/home.html', controller: 'homeController'}).
        when('/treeSearch', {templateUrl:'views/tree.html', controller:'treeController'}).
        when('/listUser/:id', {templateUrl:'views/listuser.html', controller: 'listController'}).
        when('/queryInAng', {templateUrl:'views/queryInang.html', controller: 'jqueryController'}).
        when('/myLab', {templateUrl:'views/lobby.html'}).
        when('/notfound', {templateUrl:'views/pagenotfound.html'}).
        //otherwise({redirectTo: 'login'});
        otherwise({redirectTo: '/home'});

        $facebookProvider.setAppId('516672468444595');

});

angAuth.constant('AppConstants', {
    ServerPath: '/server',
    appPath:'http://ergast.com/api/f1/2013/'
});


angAuth.run(function($rootScope, $location, $facebook){
    // Load the facebook SDK asynchronously
    (function(){
        // If we've already installed the SDK, we're done
        if (document.getElementById('facebook-jssdk')) {return;}

        // Get the first script element, which we'll use to find the parent node
        var firstScriptElement = document.getElementsByTagName('script')[0];

        // Create a new script element and set its id
        var facebookJS = document.createElement('script');
        facebookJS.id = 'facebook-jssdk';

        // Set the new script's source to the source of the Facebook JS SDK
        facebookJS.src = '//connect.facebook.net/en_US/all.js';

        // Insert the Facebook JS SDK into the DOM
        firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
    }());

/*
    $rootScope.$on('$locationChangeStart', function () {
        if((localStorage.getItem('FBUserData') === null) && ($location.path() !== '/login')){
            $location.url('/login');
        }
    });
    $rootScope.$on('$locationChangeSuccess', function () {

        $facebook.getLoginStatus().then(
            function(response) {
                if(($location.path() !== '/login')) {
                    if (response && response.status != 'connected') {
                            $location.url('/login');
                    }
                }else if($location.path() === '/login'){
                    if (response && response.status === 'connected') {
                        $location.url('/home'); //or redirect to loca   tion where it has logged out from
                    }
                }
            },
            function(err) {
                console.log(err);
        });
    });*/
});