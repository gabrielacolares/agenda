var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
  $routeProvider
	.when('/', {
		controller: 'ListController',
		templateUrl: 'views/agenda/list.html'
	})
	.when('/add', {
		controller: 'AddController',
		templateUrl: 'views/agenda/add.html'
	})
	.when('/edit/:id', {
		controller: 'EditController',
		templateUrl: 'views/agenda/edit.html'
	
  })
   .when('/doc', {
      templateUrl : 'views/documentacao/documentacao.html',
      controller  : 'DocController',
  })
	.otherwise({
		redirectTo: '/'
	});
});

app.constant("FBURL", 
 "https://agenda-29385.firebaseio.com/contatos/"
);
