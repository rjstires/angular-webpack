const angular = require('angular');
const ngRoute = require('angular-route');

const routing = ($routeProvider) => {
    $routeProvider
    .when('/', {
        controller: require('./home/home.controller'),
        controllerAs: 'vm',
        template: require('./home/home.html'),
    })
        .otherwise('/');
};

angular.module('myApplication', [ngRoute]).config(routing);
