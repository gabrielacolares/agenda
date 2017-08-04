app.controller('AddController', ['$scope', '$firebaseArray', '$location', 'FBURL', '$filter',
function($scope, $firebaseArray, $location, FBURL,$filter){
	$scope.addContato = function() {
		var ref = new Firebase(FBURL);
		var contato = $firebaseArray(ref);
		var d = new Date();
		var dataCad = d.toString();
		$scope.contato.dataCadastro = dataCad;
		
		contato.$add({
			nome: $scope.contato.nome,
			sobrenome: $scope.contato.sobrenome,
			telefone: $scope.contato.telefone,
			apelido: $scope.contato.apelido,
			dataCadastro : $scope.contato.dataCadastro
		});
		$location.path('/');
	};
	
}]);
