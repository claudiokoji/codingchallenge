(function() {
    'use strict';

    angular.module("app").controller('FormViewController', FormViewController);
    FormViewController.$inject = ['$http'];
    function FormViewController($http){
        var vm = this;


        activate();

        function activate() {
            $http({
                method: 'GET',
                url: 'http://127.0.0.1:3001/api/getForm'
              }).then(function successCallback(response) {
                  vm.forms = response.data.questions;
                  vm.customerName = response.data.customerName;
                }, function errorCallback(response) {
                    console.log(response);
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                });
        }
    }
})();