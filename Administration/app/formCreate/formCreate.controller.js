(function() {
    'use strict';

    angular.module("app").controller('FormCreateController', FormCreateController);
    FormCreateController.$inject = ['$http'];
    function FormCreateController($http){
        var vm = this;

        vm.formName = "";
        vm.forms = [
            {
                name: 'Pergunta 1',
                type: 'Texto'
            },
            {
                name: 'Pergunta 2',
                type: 'Verdadeiro/Falso'
            }
        ];
        vm.qrReady = false;
        vm.addQuestion = addQuestion;
        vm.createForm = createForm;

        function addQuestion() {
            if (!vm.questionName || !vm.questionType) {
                return;
            }

            vm.forms.push({
                name: vm.questionName,
                type:  vm.questionType
            });

            vm.questionName = '';
            vm.questionType = '';
        }

        function createForm() {
            if(!vm.formName || !vm.forms){
                return;
            }
            vm.qrReady = true;
            vm.qrData = JSON.stringify({
                name: vm.formName,
                questions: vm.forms
            });

            $http.post('http://127.0.0.1:3001/api/createForm',{
                formName: vm.formName,
                questions: vm.forms                 
            }).then(function successCallback(response) {
                console.log(response);   
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }
})();