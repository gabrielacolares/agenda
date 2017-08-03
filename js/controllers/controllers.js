
app.controller('ListagemCtrl', ['$scope', '$firebaseArray', 'FBURL', function($scope,$firebaseArray, FBURL){
  var contatos = new Firebase(FBURL);
  $scope.contatos = $firebaseArray(contatos);
}]);
