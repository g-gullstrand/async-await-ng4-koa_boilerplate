'use strict';

const setupApiRoutes = require('./api.route');

var routes = function(router) {

    setupApiRoutes(router);

};

module.exports = routes;
