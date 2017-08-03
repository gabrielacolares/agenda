

// app.controller('ListagemCtrl', function($rootScope, $location,$http){
//     $rootScope.activetab = $location.path();
//     $rootScope.contatos = [];
//     $http.get('http://demo8839450.mockable.io/contato').
//         then(function(response) {
//             $rootScope.contatos = response.data.contatos;
//         });
     
//     //    $rootScope.remover = function(contato) {
//     //    }
    
//     });
app.controller('ListagemCtrl', ['$scope', '$firebaseArray', 'FBURL', function($scope,$firebaseArray, FBURL){
  var contatos = new Firebase(FBURL);
  $scope.contatos = $firebaseArray(contatos);
}]);
app.controller('DocumentacaoCtrl', function($rootScope, $location){
   $rootScope.activetab = $location.path();
});


