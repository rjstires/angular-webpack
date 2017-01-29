const routing = ($routeProvider) => {
    $routeProvider
    .when('/', {
        controller: 'homeController',
        controllerAs: 'vm',
        template: require('./home.html'),
    })
        .otherwise('/');
};

module.exports = routing;
