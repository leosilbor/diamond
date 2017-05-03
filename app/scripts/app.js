'use strict';

angular.module('diamond', ['ngRoute', 'ngCookies'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
    
    .when('/:login/entrar', {
        templateUrl : 'views/entrar.html'
    })
    .when('/:login/administracao', {
        templateUrl : 'views/administracao.html',
        controller : 'AdministracaoCtrl'

    })
    .when('/:login/cadastrar', {
        templateUrl : 'views/cadastrar.html'
    })
    .when('/:login/produtos/:idCategoria', {
        templateUrl : 'views/produtos.html',
        controller : 'ProdutoCtrl'
    })
    .when('/:login/checkout', {
        templateUrl : 'views/checkout.html'
    })
    .when('/:login/carrinho', {
        templateUrl : 'views/carrinho.html',
        controller : 'CarrinhoCtrl'
    })
    .when('/:login', {
        templateUrl : 'views/principal.html',
        controller : 'PrincipalCtrl'
    })
    
    ;

    // $locationProvider.html5Mode(true);
});