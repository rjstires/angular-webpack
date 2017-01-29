const angular = require('angular');
const ngRoute = require('angular-route');

// Features
const home = require('./home');

module.exports = angular
    .module('myApplication', [ngRoute, home]);

console.log("Up and running with AngularJS v" + angular.version.full);
