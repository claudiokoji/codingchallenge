(function() {
    'use strict';

    angular.module("app").controller('HomeController', HomeController);    
    HomeController.$inject = ['$location'];
    function HomeController($location){
        var vm = this;

        vm.newVar = "OK";   
        vm.createForm = createForm;
        vm.viewForm = viewForm;
        
        function createForm() {
            $location.path('/create');
        }

        function viewForm() {
            $location.path('/create');
        }
    }
})();