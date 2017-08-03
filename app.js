var app = angular.module('app',['ngRoute', 'firebase']);

app.config(function($routeProvider, $locationProvider)
{
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});

   $routeProvider
   .when('/', {
    templateUrl : 'agenda/views/agenda/list.html',
      controller     : 'ListagemCtrl',
   })

   .when('/add', {
      templateUrl : 'agenda/views/agenda/add.html',
      controller  : 'AddController',
   })

  //  .when('/listagem', {
  //     templateUrl : 'agenda/views/agenda/list.html',
  //     controller  : 'ListagemCtrl',
  //  })

   .when('/documentacao', {
      templateUrl : 'agenda/views/documentacao/documentacao.html',
      controller  : 'DocumentacaoCtrl',
   })
   .otherwise ({ redirectTo: '/' });
});



app.constant("FBURL", 
  "https://agenda-29385.firebaseio.com/contatos/" //Use the URL of your project here
);