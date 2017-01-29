const angular = require('angular');

const dataService = function() {
    return {
        getData: () => {
            return {data: [0, 1, 2, 3, 4]};
        },
    };
};

module.exports = angular
    .module('services.dataService', [])
    .service('dataService', dataService)
    .name;
