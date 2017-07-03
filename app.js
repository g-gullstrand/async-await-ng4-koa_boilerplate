'use strict';

const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const parser = require('koa-bodyparser');
const send = require('koa-send');
const serve = require('koa-static');

// const views = require('koa-views');

const middlewares = require('./server/middlewares/error.middleware');
const routes = require('./server/routes');
const APP_PORT = process.env.PORT || 3000;

middlewares(app);
routes(router);

//TODO mock config
const config = {
  environment: 'development'
};

// serve Angular app in /dist folder
app.use(serve(__dirname + '/dist'));

const statics = async (ctx, next) => {

    if ('/' === ctx.path || '/index.html' === ctx.path) return await ctx.render('dist/index.html', {config});
    // if ('/' === ctx.path || '/index.html' === ctx.path) return await send(ctx, ctx.path, { root: __dirname + '/dist' });
    // if ('/config.js' == ctx.path) return await send(ctx, ctx.path);
    if(ctx.path.indexOf('public/') !== -1 ) {
        return await send(ctx, ctx.path);
    }
    await next();
};

app
    // .use(views(__dirname, {map: {html: 'underscore'}}))
    .use(parser())
    .use(statics)
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}.`));
