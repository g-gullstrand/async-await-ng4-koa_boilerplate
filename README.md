# Async-await, ng4, koa boilerplate

The Angular app was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1, and set up to proxy the http calls to port 3000 to the Koa.js server. See proxy.conf.json
// NOTE the proxy is only for development as the production build is targeting the dist folder where the compiled Angular app resides.

## Development server

Backend
Gulp, browsersync and nodemon is used for live reload of the server.
  - Run `gulp serve` to start the backend dev server.

Frontend
The Angular app uses the proxy prefix to ng start.
  - Run `npm run serve-dev` to fire up the Angular app with the proxy. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Any request sent to localhost will be redirected to port 3000 as explained above.

## Build

Frontend
Run `npm run build-client` to build the client side Angular app. The build artifacts will be stored in the `dist/` directory.

Backend
Run `npm run build-server` to build the backend side Koa app. The build artifacts will be stored in the `server-dist/` directory.
The `app.js` file in the root folder needs to be compiled using babel.


Run `babel app.js --out-file server.js`. Or see https://babeljs.io/docs/usage/cli/ for updated docs.


## Deployment
  Note that the `dist` folder is currently in the .gitignore file and wile hence not be uploaded to your repo. Comment out the line in the .gitignore file to include it in your git commits


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
