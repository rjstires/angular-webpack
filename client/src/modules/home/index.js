const angular = require('angular');
const ngRoute = require('angular-route');

const routing = require('./home.routes');
const homeController = require('./home.controller');
const dataService = require('../../services/data.service');

require('./home.less');

module.exports = angular
    .module('myApplication.home', [ngRoute, dataService])
    .config(routing)
    .controller('homeController', homeController)
    .name;
