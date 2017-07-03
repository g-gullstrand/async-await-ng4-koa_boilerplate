'use strict';

const ApiController = require('./../controllers/api.controller');

var setupRoute = function(router) {

    const ctrl = new ApiController();

    const basePath = '/api';

    router
        .get(`${basePath}`, ctx => ctrl.test(ctx))
        .get(`${basePath}/testAsync`, ctx => ctrl.testAsync(ctx))
        // .post(`${basePath}/testAsync`, ctx => ctrl.testAsync(ctx))
};

module.exports = setupRoute;
