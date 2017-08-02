app.controller('HomeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
   

});

app.controller('CadastroCtrl', function($rootScope, $location,$http)
{
   $rootScope.activetab = $location.path();
   $rootScope.contato = {};
   $rootScope.contato.date =  new Date();
   console.log($rootScope.contato.date);
   $rootScope.mensagem = '';
   $rootScope.submeter = function() {
       

            // $http.get('http://demo8534877.mockable.io/contatos', $rootScope.contato).success(function() {
                $rootScope.mensagem = 'Foto adicionada com sucesso';
            // }).error(function(erro) {
            //     console.log('Não foi possível cadastrar a foto');
            // })
        };


});


app.controller('ListagemCtrl', function($rootScope, $location,$http)
{
    $rootScope.activetab = $location.path();
    $rootScope.contatos = [];
    $http.get('http://demo8534877.mockable.io/contatos').
        then(function(response) {
            $rootScope.contatos = response.data.contatos;
        });

        
    //    $rootScope.remover = function(contato) {
    //    }
    
    });
app.controller('DocumentacaoCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});


