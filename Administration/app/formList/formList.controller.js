(function() {
    'use strict';

    angular.module("app").controller('FormListController', FormListController);
    FormListController.$inject = ['$location','$http'];
    function FormListController($location,$http){
        var vm = this;

        vm.openForm = openForm;

        activate();

        function openForm() {
            $location.path('/view');
        }

        function activate() {
            $http({
                method: 'GET',
                url: 'http://127.0.0.1:3001/api/getForms'
              }).then(function successCallback(response) {
                  vm.forms = response.data;
                }, function errorCallback(response) {
                    console.log(response);
                });
        }
    }
})();