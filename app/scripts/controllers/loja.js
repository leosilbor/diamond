'use strict';

angular.module('diamond')
.controller('LojaCtrl', function($http, $window, $cookies){
    var ctrl = this;
    ctrl.loja = null;

    // $cookies.remove('loja');

    if ( !$cookies.getObject('loja') ) {
        $http.get('http://localhost:8080/lojas/1').then(
            function(response) {
                ctrl.loja = response.data;
                ctrl.loja.carrinho = {produtos: [], quantidadeTotal: 0};
                $cookies.putObject('loja', ctrl.loja);
            },
            function() {
                $window.alert('erro');
            }
        );
    } else {
        ctrl.loja = $cookies.getObject('loja');
    }


    
});