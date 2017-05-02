'use strict';

angular.module('diamond', ['ngRoute', 'ngCookies'])
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
        templateUrl : 'views/carrinho.html',
        controller : 'CarrinhoCtrl'
    });

    $locationProvider.html5Mode(true);
});