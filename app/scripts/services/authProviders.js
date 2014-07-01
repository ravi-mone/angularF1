/**
 * Created by Ravi on 3/26/14.
 */
'use strict';

angAuth.factory('raceProviders', function ($q, $http, AppConstants, $resource, log) {
    var ergastAPI = {};
    return{

       getDrivers : function() {
           return $http({
               method: 'GET',
               url: AppConstants.ServerPath + '/2013driverStandings.json'
           });
       },
        getDirectiveRaceList : function() {
            return $resource(AppConstants.ServerPath + '/results.json');
        },
       getDriverDetails : function(id) {
            return $http({
                method: 'JSONP',
                url: AppConstants.appPath+'drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
            });
        }
    }
});