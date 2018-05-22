(function() {
    'use strict';

    angular.module('starter.controllers')
    .controller('LoginController', LoginController);

    function LoginController() {
        var vm = this;

        vm.newVar = "Entrou";
    }
})();