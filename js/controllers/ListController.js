
app.controller('ListController', ['$scope', '$firebaseArray','$firebaseObject', 'FBURL', function($scope,$firebaseArray, $firebaseObject,FBURL){
  var contatos = new Firebase(FBURL);
  $scope.contatos = $firebaseArray(contatos);

  $scope.removeContato = function(id) {
    console.log(id);
    var ref = new Firebase(FBURL + id);
    var contato = $firebaseObject(ref)
    contato.$remove();
   };
}]);