app.controller('EditController', ['$scope','$location', '$routeParams', '$firebaseObject', 'FBURL',   
    function($scope, $location, $routeParams, $firebaseObject, FBURL){
    var ref = new Firebase(FBURL + $routeParams.id);
    $scope.mensagem = '';
    $scope.contato = $firebaseObject(ref);

    $scope.editContato = function() {
      $scope.contato.$save({
			nome: $scope.contato.nome,
			sobrenome: $scope.contato.sobrenome,
			telefone: $scope.contato.telefone,
			apelido: $scope.contato.apelido,
			dataCadastro : new Date()
        }).then(function(data){
    $scope.mensagem = "Salvo com sucesso!";
    $scope.edit_form.$setPristine();
        $scope.contato = {};
       $location.path('/list');
  })}
}]);