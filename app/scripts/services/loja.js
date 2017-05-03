'use strict';

angular.module('diamond')

.service('lojaService', function($rootScope, $window, $routeParams, $http, $q){
    
    this.dadosLoja = function(){
        var deferred = $q.defer();

        if ( !$rootScope.loja ) {
            $http.get('http://localhost:8080/lojas/'+$routeParams.login).then(
                function(response) {
                    $rootScope.loja = response.data;
                    $rootScope.loja.carrinho = {produtos: [], quantidadeTotal: 0};
                    deferred.resolve($rootScope.loja);
                },
                function() {
                    deferred.reject();
                }
            );
            
        } else {
            deferred.resolve($rootScope.loja);
        }

        return deferred.promise;
    };

    
});