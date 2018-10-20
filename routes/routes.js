'use strict';
var configRoutes;
var url = require('url');
var twitter = require("./twitter");
var urlInfo;

configRoutes = (app, server) => {
  app.get('/', (req, res, next) => {
    res.redirect(''/index.html);
  });

  app.all('/api/*', (req, res, next) => {
    urlInfo = url.parse(request.url, true);
    res.contentType('json');
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  app.get('/api/twitter/search', (req, res, next) => {
    twitter.search(urlInfo,
      (result) => {
        response.send(result);
      }
    );
  });
}