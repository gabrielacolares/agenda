
app.controller('ListController', ['$scope', '$firebaseArray','$firebaseObject', 'FBURL', '$location',function($scope,$firebaseArray, $firebaseObject,FBURL,$location){
  var contatos = new Firebase(FBURL);
  $scope.contatos = $firebaseArray(contatos);
  $scope.mensagem = '';
  $scope.removeContato = function(id) {
    var ref = new Firebase(FBURL + id);
    var contato = $firebaseObject(ref)
    contato.$remove().then(function(data){
    $scope.mensagem = "Deletado com sucesso!";
  })}
}]);
