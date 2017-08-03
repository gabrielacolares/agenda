
app.controller('ListController', ['$scope', '$firebaseArray','$firebaseObject', 'FBURL', function($scope,$firebaseArray, $firebaseObject,FBURL){
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
