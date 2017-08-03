app.controller('EditController', ['$scope','$location', '$routeParams', '$firebaseObject', 'FBURL',   
    function($scope, $location, $routeParams, $firebaseObject, FBURL){
    
    var ref = new Firebase(FBURL + $routeParams.id);
		$scope.product = $firebaseObject(ref);
    
    $scope.editContato = function() {
        $scope.contato.$save({
            nome: $scope.contato.nome,
            sobrenome: $scope.contato.sobrenome,
			sobrenome: $scope.contato.sobrenome,
            price: $scope.product.price
        });
        $scope.edit_form.$setPristine();
        $scope.product = {};
        $location.path('/products');
        
    };
     
}]);