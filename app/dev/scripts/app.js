var app = angular.module('app', [ 'ngAnimate', 'ui.router' ]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('search', {
            url: '/search',
            templateUrl: 'dev/scripts/activity/search/search-activity.tmpl.html',
            controller: 'SearchController',
            controllerAs: 'ctrl'
        });

    $urlRouterProvider.otherwise('/search')
});

app
    .controller('SearchController', SearchController);

app
    .directive('loader', loaderDirective);

app
    .factory('constantsFactory', constantsFactory)
    .factory('loaderFactory', loaderFactory)
    .factory('restServiceFactory', restServiceFactory)
    .factory('searchFactory', searchFactory);

app
    .animation('.slideAnimation', slideAnimation);