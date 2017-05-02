'use strict';

angular
  .module('diamond', ['ngRoute'])
  
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
          templateUrl : 'views/principal.html',
          controller : 'PrincipalCtrl'
      })
      .when('/entrar', {
          templateUrl : 'views/entrar.html'
      })
      .when('/administracao', {
          templateUrl : 'views/administracao.html',
          controller : 'AdministracaoCtrl'

      })
      .when('/cadastrar', {
          templateUrl : 'views/cadastrar.html'
      })
      .when('/produtos/:idCategoria', {
          templateUrl : 'views/produtos.html',
          controller : 'ProdutoCtrl'
      })
      .when('/checkout', {
          templateUrl : 'views/checkout.html'
      })
      .when('/carrinho', {
          templateUrl : 'views/carrinho.html'
      });

      $locationProvider.html5Mode(true);
}).controller('PrincipalCtrl', function($scope, $http, $window){
    $http.get('http://localhost:8080/produtos').then(
        function(response) {
            $scope.produtos = response.data;
        },
        function() {
            $window.alert('erro');
        });

    $scope.selecionarProduto = function(produto) {
        $scope.produto = produto;
    };

    $scope.greeting = function () {
        $http.get('http://localhost:8080/greeting').then(
        function(response) {
            $window.alert(response.data.content);
        },
        function() {
            $window.alert('erro');
        });
    };
    
}).controller('LojaCtrl', function($scope, $http, $window){
    $http.get('http://localhost:8080/lojas/1').then(
        function(response) {
            $scope.loja = response.data;
        },
        function() {
            $window.alert('erro');
        });
    
}).controller('AdministracaoCtrl', function($scope, $http, $window){
        $http.get('http://localhost:8080/produtos').then(
        function(response) {
            $scope.produtos = response.data;
        },
        function() {
            $window.alert('erro');
        });

        $http.get('http://localhost:8080/categorias').then(
        function(response) {
            $scope.categorias = response.data;
        },
        function() {
            $window.alert('erro');
        });

    $scope.salvarProduto = function() {
        $http.post('http://localhost:8080/produtos', $scope.produto).then(
        function() {
            $('#myModal').modal('toggle');
            $scope.produto = {};
            $http.get('http://localhost:8080/produtos').then(
            function(response) {
                $scope.produtos = response.data;
            },
            function() {
                $window.alert('erro');
            });
        },
        function() {
            $window.alert('erro');
        });
    };
    
}).controller('ProdutoCtrl', function($scope, $http, $routeParams, $window){
        $http.get('http://localhost:8080/produtos/categoria/'+$routeParams.idCategoria).then(
        function(response) {
            $scope.produtos = response.data;
        },
        function() {
            $window.alert('erro');
        });

        $http.get('http://localhost:8080/categorias').then(
        function(response) {
            $scope.categorias = response.data;
        },
        function() {
            $window.alert('erro');
        });

    $scope.salvarProduto = function() {
        $http.post('http://localhost:8080/produtos', $scope.produto).then(
        function() {
            $('#myModal').modal('toggle');
            $scope.produto = {};
            $http.get('http://localhost:8080/produtos').then(
            function(response) {
                $scope.produtos = response.data;
            },
            function() {
                $window.alert('erro');
            });
        },
        function() {
            $window.alert('erro');
        });
    };
    
})
;