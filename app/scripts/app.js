'use strict';

angular
  .module('diamond', ['ngRoute'])
  
  .config(function($routeProvider) {
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
      .when("/carrinho", {
          templateUrl : "views/carrinho.html"
      });
}).controller('PrincipalCtrl', function($scope){

    
});