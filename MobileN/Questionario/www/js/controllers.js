angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('LoginController2', function($scope,$state) {
  $scope.login = function () {
    $state.go('formList');
  };
})
.controller('FormListController', function($scope,$state) {
  $scope.openForm = function () {
    $state.go('formDetail');    
  };
})
.controller('FormDetailController', function($scope,$state) {
  $scope.back = function () {
    $state.go('formList');    
  };
})
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
