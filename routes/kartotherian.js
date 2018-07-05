'use strict';

const pathLib = require('path');
const Promise = require('bluebird');
const core = require('@kartotherian/core');
const info = require('../package.json');
const server = require('@kartotherian/server');

function startup(app) {
    return startup.bootstrap(app).then(() => {
        const sources = new core.Sources();
        return sources.init(app.conf);
    }).then((sources) => {
        core.setSources(sources);
        return server.init({
            core,
            app,
            requestHandlers: app.conf.requestHandlers.map(rh => require(rh)),
        });
    }).return(); // avoid app.js's default route initialization
}

startup.bootstrap = function bootstrap(app) {
    return Promise.try(() => {
        core.init(
            app, info.kartotherian, pathLib.resolve(__dirname, '..'),
            module => require(module),
            module => require.resolve(module)
        );
    });
};

module.exports = startup;
