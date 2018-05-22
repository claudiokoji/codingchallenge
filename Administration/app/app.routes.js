(function() {
    'use strict';

    angular.module("app").config(config);
    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        console.log('Entrou');
        $routeProvider
        .when("/", {
            templateUrl : "app/home/home.html",
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .when("/create", {
            templateUrl : "app/formCreate/formCreate.html",
            controller: 'FormCreateController',
            controllerAs: 'vm'
        })
        .when("/view", {
            templateUrl : "app/formView/formView.html",
            controller: 'FormViewController',
            controllerAs: 'vm'
        })
        .when("/list", {
            templateUrl : "app/formList/formList.html",
            controller: 'FormListController',
            controllerAs: 'vm'
        });        
    }
})();