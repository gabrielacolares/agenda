app.controller('EditController', ['$scope','$location', '$routeParams', '$firebaseObject', 'FBURL',   
    function($scope, $location, $routeParams, $firebaseObject, FBURL){

    var ref = new Firebase(FBURL + $routeParams.id);
    $scope.contato = $firebaseObject(ref);

    $scope.editContato = function() {
      contato.$save({
			nome: $scope.contato.nome,
			sobrenome: $scope.contato.sobrenome,
			telefone: $scope.contato.telefone,
			apelido: $scope.contato.apelido,
			dataCadastro : new Date()
		});
        $scope.edit_form.$setPristine();
        $scope.contato = {};
        $location.path('/list');

    };

}]);