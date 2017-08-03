app.controller('AddController', ['$scope', '$firebaseArray', '$location', 'FBURL', 
function($scope, $firebaseArray, $location, FBURL){
	$scope.addContato = function() {
		var ref = new Firebase(FBURL);
		var contato = $firebaseArray(ref);
		contato.$add({
			nome: $scope.contato.nome,
			sobrenome: $scope.contato.sobrenome,
			telefone: $scope.contato.telefone,
			apelido: $scope.contato.apelido,
			dataCadastro : new Date()
		});
		$location.path('/');
	};
	
}]);
