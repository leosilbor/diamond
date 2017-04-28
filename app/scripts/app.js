'use strict';

angular
  .module('diamond', ['ngRoute'])
  
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
          templateUrl : "views/principal.html",
          controller : "PrincipalCtrl"
      })
      .when("/entrar", {
          templateUrl : "views/entrar.html"
      })
      .when("/cadastrar", {
          templateUrl : "views/cadastrar.html"
      })
      .when("/produtos", {
          templateUrl : "views/produtos.html"
      })
      .when("/checkout", {
          templateUrl : "views/checkout.html"
      })
      .when("/carrinho", {
          templateUrl : "views/carrinho.html"
      });

      $locationProvider.html5Mode(true);
}).controller('PrincipalCtrl', function($scope){

    
});