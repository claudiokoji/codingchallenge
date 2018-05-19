(function() {
    'use strict';

    // angular.module("app").config(['$locationProvider', function($locationProvider) {
    //   // Configure existing providers
    //   $locationProvider.hashPrefix('!');
    // }]);

    angular.module("app", ["ngRoute"]).config(config);
    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        console.log('Entrou');
        $routeProvider
        .when("/", {
            templateUrl : "app/home/home.html",
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .when("/create", {
            templateUrl : "app/formCreate/formCreate.html"
        });
    }
})();