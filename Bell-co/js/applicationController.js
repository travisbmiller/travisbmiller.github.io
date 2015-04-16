(function() {
    'use strict';

    angular
        .module('app')
        .controller('main', main)

    function main($scope) { 
        var vm = this;
        vm.onlyNumbers = /^\d+$/;
        
       

    }
})();