'use strict';

angular.module('diamond')
.controller('CarrinhoCtrl', function($scope, $cookies){
    $scope.carrinho = $cookies.getObject('loja').carrinho;
    
    
});