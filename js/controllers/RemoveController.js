$scope.removeContato = function(id) {
    var ref = new Firebase(FBURL + id);
    var contato = $firebaseObject(ref)
    contato.$remove();
   };