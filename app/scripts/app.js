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
      .when("/administracao", {
          templateUrl : "views/administracao.html",
          controller : "AdministracaoCtrl"

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
}).controller('PrincipalCtrl', function($scope, $http){
    $scope.greeting = function () {
        $http.get('http://localhost:8080/greeting').then(
        function(response) {
            alert(response.data.content);
        },
        function(response) {
            alert('erro');
        });
    };
    
}).controller('LojaCtrl', function($scope, $http){
    $http.get('http://localhost:8080/lojas').then(
        function(response) {
            $scope.loja = response.data;
        },
        function(response) {
            alert('erro');
        });
    
}).controller('AdministracaoCtrl', function($scope, $http){
    $scope.salvarProduto = function() {
        $http.post('http://localhost:8080/produtos', $scope.produto).then(
        function(response) {
            $scope.produto = {};
        },
        function(response) {
            alert('erro');
        });
    };
    
})
;