'use strict';

angular.module('diamond')
.controller('LojaCtrl', function($http, $scope, $window, $cookies, $routeParams, $rootScope, $location, lojaService){
    lojaService.dadosSessao();
    $http.get('http://localhost:8080/lojas/'+$routeParams.login).then(
        function(response) {
            $rootScope.loja = response.data;
            $rootScope.loja.carrinho = {produtos: [], quantidadeTotal: 0};
            $location.path($routeParams.login+'/principal');
        },
        function() {
            $window.alert('erro');
        }
    );


    
});