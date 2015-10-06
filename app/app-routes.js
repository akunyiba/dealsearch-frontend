'use strict';

adApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/ad/main'});
}]);

adApp_ad.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/ad/main', {
            templateUrl: 'app/components/ad/main/main.html',
            controller: 'mainController'
        })
        .when('/ad/create', {
            templateUrl: 'app/components/ad/create/create.html',
            controller: 'createController',
            resolve: {
                ads: function(services, $route){
                    return services.getAds();
                }
            }
        })
        .when('/ad/update/:adsId', {
            templateUrl: 'app/components/ad/update/update.html',
            controller: 'updateController',
            resolve: {
                ad: function(services, $route){
                    var adsId = $route.current.params.adsId;
                    return services.getAd(adsId);
                }
            }
        })
        .when('/ad/delete/:adsId', {
            templateUrl: 'app/components/ad/main/main.html',
            controller: 'deleteController'
        })
        .otherwise({
            redirectTo: '/ad/main'
        });
}]);