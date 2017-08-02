app.controller('HomeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('CadastroCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('ListagemCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});
app.controller('DocumentacaoCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});