(function() {
    'use strict';

    angular.module("app").controller('HomeController', HomeController);    
    HomeController.$inject = ['$location'];
    function HomeController($location){
        var vm = this;

        vm.newVar = "OK";   
        vm.createForm = createForm;
        vm.viewForm = viewForm;
        vm.forms = [{
                name: 'Pergunta 1',
                type: 'Texto'
            },
            {
                name: 'Pergunta 2',
                type: 'Verdadeiro/Falso'
            }
        ];        
        
        function createForm() {
            $location.path('/create');
        }

        function viewForm() {
            $location.path('/list');
        }
    }
})();