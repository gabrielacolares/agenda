app.controller('HomeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
   

});

app.controller('CadastroCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
    console.log( $rootScope.contato);
    $rootScope.enviar = function(contato){}

});


app.controller('ListagemCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
   $rootScope.contatos = [{nome:'gabi'},{nome:'luciana'}];
   $rootScope.remover = function(contato) {}
   
});
app.controller('DocumentacaoCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});


