'use strict';

angular.module('diamond')
.controller('AdministracaoCtrl', function($scope, $http, $window){
    $http.get('http://localhost:8080/produtos').then(
        function(response) {
            $scope.produtos = response.data;
        },
        function() {
            $window.alert('erro');
        }
    );

    $http.get('http://localhost:8080/categorias').then(
        function(response) {
            $scope.categorias = response.data;
        },
        function() {
            $window.alert('erro');
        }
    );

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
                    }
                );
            },
            function() {
                $window.alert('erro');
            }
        );
    };
    
});