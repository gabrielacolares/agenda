var app = angular.module('app',['ngRoute', 'firebase']);

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
      templateUrl : 'agenda/views/agenda/add.html',
      controller  : 'CadastroCtrl',
   })

   .when('/listagem', {
      templateUrl : 'agenda/views/agenda/list.html',
      controller  : 'ListagemCtrl',
   })

   .when('/documentacao', {
      templateUrl : 'agenda/views/documentacao/documentacao.html',
      controller  : 'DocumentacaoCtrl',
   })
   .otherwise ({ redirectTo: '/home' });
});

app.constant("FBURL", 
  "https://ang-crud.firebaseio.com/products/" //Use the URL of your project here
);