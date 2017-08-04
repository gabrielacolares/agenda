app.controller('DetailController', ['$scope','$location', '$routeParams', '$firebaseObject', 'FBURL',   
   function($scope, $location, $routeParams, $firebaseObject, FBURL){
    var ref = new Firebase(FBURL + $routeParams.id);
    $scope.mensagem = '';
    $scope.contato = $firebaseObject(ref);
}]);