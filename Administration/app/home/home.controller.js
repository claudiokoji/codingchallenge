(function() {
    'use strict';

    angular.module("app").controller('HomeController', HomeController);
    
    function HomeController(){
        var self = this;
        self.newVar = "OK";        
    }
})();