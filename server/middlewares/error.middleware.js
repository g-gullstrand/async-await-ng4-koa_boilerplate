'use strict';

const middlewares = function(app) {

    var logger = async (ctx, next) => {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    };

    const error = async (ctx, next) => {
        try {
            await next(); // next is now a function
        } catch (err) {
            ctx.body = { message: err.message };
            ctx.status = err.status || 500;
        }
    };

    app
        .use(logger)
        .use(error);

};

module.exports = middlewares;
