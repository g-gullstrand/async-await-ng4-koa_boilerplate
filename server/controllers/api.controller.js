'use strict';

import ApiService from './../services/api.service'

class ApiController {

    constructor() {

    }

    async test(ctx) {
      ctx.body = 'ARROW Route workssss';
    }

    async testAsync(ctx) {
        // const body = ctx.request.body;
        // console.log(body);
        ctx.body = await ApiService.test();
    }

}

module.exports = ApiController;
