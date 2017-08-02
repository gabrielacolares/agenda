var app = angular.module('app',['ngRoute']);



app.config(function($routeProvider, $locationProvider)
{
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});

   $routeProvider
   .when('/home', {
      templateUrl : 'agenda/views/agenda/home.html',
      controller     : 'HomeCtrl',
   })

   .when('/cadastro', {
      templateUrl : 'agenda/views/agenda/cadastro.html',
      controller  : 'CadastroCtrl',
   })

   .when('/listagem', {
      templateUrl : 'agenda/views/agenda/listagem.html',
      controller  : 'ListagemCtrl',
   })

   .when('/documentacao', {
      templateUrl : 'agenda/views/documentacao/documentacao.html',
      controller  : 'DocumentacaoCtrl',
   })
   .otherwise ({ redirectTo: '/home' });
});