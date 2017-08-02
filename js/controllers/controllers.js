app.controller('HomeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
   

});

app.controller('CadastroCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
    console.log( $rootScope.contato);
});

app.controller('ListagemCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
   $rootScope.contatos = [{nome:'gabi'},{nome:'luciana'}];
    $rootScope.remover = function(contato) {
console.log(contato);}
        // como saber qual foto será removida?
    
   
});
app.controller('DocumentacaoCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});