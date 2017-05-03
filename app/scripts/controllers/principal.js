'use strict';

angular.module('diamond')
.controller('PrincipalCtrl', function($scope, $http, $window, $cookies, lojaService){
    
    lojaService.dadosLoja().then(function(loja){
        $http.get('http://localhost:8080/produtos/'+loja.id).then(
            function(response) {
                $scope.produtos = response.data;
            },
            function() {
                $window.alert('erro');
            }
        );
    });

    

    $scope.selecionarProduto = function(produto) {
        $scope.produto = produto;
    };

    $scope.adicionarProdutoCarrinho = function(loja, produto) {
        var possui = false;
        angular.forEach(loja.carrinho.produtos, function(value){
            if ( value.id===produto.id ) {
                value.quantidade++;
                possui = true;
            }
        });
        if ( !possui ) {
            produto.quantidade = 1;
            loja.carrinho.produtos.push(produto);
        }
        loja.carrinho.quantidadeTotal++;
        $cookies.putObject('loja', loja);
    };
    
});