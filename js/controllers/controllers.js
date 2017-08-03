
app.controller('ListagemCtrl', ['$scope', '$firebaseArray', 'FBURL', function($scope,$firebaseArray, FBURL){
  var contatos = new Firebase(FBURL);
  $scope.contatos = $firebaseArray(contatos);
}]);
app.controller('DocumentacaoCtrl', function($rootScope, $location){
   $rootScope.activetab = $location.path();
});


