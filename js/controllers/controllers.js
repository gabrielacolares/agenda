app.controller('HomeCtrl', function($rootScope, $location){
   $rootScope.activetab = $location.path();
   

});

app.controller('CadastroCtrl', function($rootScope, $location,$http){
   $rootScope.activetab = $location.path();
   $rootScope.contato = {};
   $rootScope.contato.date =  new Date();
   console.log($rootScope.contato.date);
   $rootScope.mensagem = '';
   $rootScope.submeter = function() {
            $http.post('http://demo8839450.mockable.io/contato', $rootScope.contato).success(function() {
                $rootScope.mensagem = 'Salvo com sucesso';
            }).error(function(erro) {
               $rootScope.mensagem = 'Falha ao salvar';
            })
        };
});

app.controller('ListagemCtrl', function($rootScope, $location,$http){
    $rootScope.activetab = $location.path();
    $rootScope.contatos = [];
    $http.get('http://demo8839450.mockable.io/contato').
        then(function(response) {
            $rootScope.contatos = response.data.contatos;
        });
     
    //    $rootScope.remover = function(contato) {
    //    }
    
    });
app.controller('DocumentacaoCtrl', function($rootScope, $location){
   $rootScope.activetab = $location.path();
});


