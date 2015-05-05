(function() {
    'use strict';

    angular
    .module('app')
    .config(config);

    function config($stateProvider, $urlRouterProvider) {
              
        $urlRouterProvider.otherwise("/");
      
        $stateProvider
            .state('apply', {
              url: "/apply",
              templateUrl: "./app/submit-application/apply.html",
              controllerAs: 'vm',
              controller: 'submitController'
            })
            .state('state2', {
              url: "/test",
              templateUrl: "./app/submit-application/test.html",
              controllerAs: 'vm',
              controller: 'submitController'
            })
            .state('state3', {
              url: "/dash",
              templateUrl: "./app/dashboard/dash.html",
              controllerAs: 'vm',
              controller: 'Dashboard'
            
            })
            .state('state4', {
              url: "/select",
              templateUrl: "./app/submit-application/date.html",
              controllerAs: 'vm',
              controller: 'submitController'
            
            })

        }

})();