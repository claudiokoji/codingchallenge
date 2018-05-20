(function() {
    'use strict';

    angular.module("app").controller('FormCreateController', FormCreateController);
    FormCreateController.$inject = ['$uibModal'];
    function FormCreateController($uibModal){
        var vm = this;

        vm.formName = "";
        vm.forms = [
            {
                name: 'Pergunta 1',
                type: 'Tipo 1'
            },
            {
                name: 'Pergunta 2',
                type: 'Tipo 2'
            }
        ];
        vm.addQuestion = addQuestion;

        function addQuestion() {
            vm.forms.push({
                name: vm.questionName,
                type:  vm.questionType
            });

            vm.questionName = '';
            vm.questionType = '';
        }
    }
})();