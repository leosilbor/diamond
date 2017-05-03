'use strict';

angular.module('diamond')
.controller('CarrinhoCtrl', function($scope, $cookies, lojaService){
    lojaService.dadosLoja().then(function(loja){
        
    });
    
    
});