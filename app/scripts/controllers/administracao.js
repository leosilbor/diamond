'use strict';

angular.module('diamond')
.controller('AdministracaoCtrl',  function($scope, $http, $window, lojaService){
    lojaService.dadosLoja().then(function(loja){
        $scope.loja = loja;

        $http.get('http://localhost:8080/produtos/'+loja.id).then(
            function(response) {
                $scope.produtos = response.data;
            },
            function() {
                $window.alert('erro');
            }
        );

        $http.get('http://localhost:8080/categorias/'+loja.id).then(
            function(response) {
                $scope.categorias = response.data;
            },
            function() {
                $window.alert('erro');
            }
        );
    });

    

    $scope.salvarProduto = function() {
        var produto = $scope.produto;
        var novaCategoria = true;
        angular.forEach($scope.categorias, function(value){
            if ( value.nome === produto.categoria.nome ) {
                produto.categoria = value;
                novaCategoria = false;
            }
        });

        if ( novaCategoria ) {
            $('#myModal').modal('hide');
            $('#myModalSmall').modal('show');
        } else {
            $http.post('http://localhost:8080/produtos/'+$scope.loja.id, produto).then(
                function() {
                    $('#myModal').modal('toggle');
                    $scope.produto = {};
                    $http.get('http://localhost:8080/produtos/'+$scope.loja.id).then(
                        function(response) {
                            $scope.produtos = response.data;
                        },
                        function() {
                            $window.alert('erro');
                        }
                    );
                },
                function() {
                    $window.alert('erro');
                }
            );
        }

        

        
    };

    $scope.salvarProdutoNovaCategoria = function() {
        $http.post('http://localhost:8080/produtos/'+$scope.loja.id, $scope.produto).then(
            function() {
                
                $('#myModalSmall').modal('toggle');
                $scope.produto = {};
                $http.get('http://localhost:8080/produtos/'+$scope.loja.id).then(
                    function(response) {
                        $scope.produtos = response.data;
                    },
                    function() {
                        $window.alert('erro');
                    }
                );
            },
            function() {
                $window.alert('erro');
            }
        );

        

        
    };
    
});