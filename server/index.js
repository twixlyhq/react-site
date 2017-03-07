/* eslint-disable global-require, no-console */
import path from 'path';

import compression from 'compression';
import express from 'express'; 
import morgan from 'morgan';

import renderMiddleware from './middleware/render';

import cacheData from './cache-data.js';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;
console.log(port);
const app = express();

if (isProduction) {
  app.use(compression());
} else {
  const {
    webpackDevMiddleware,
    webpackHotMiddleware,
  } = require('./middleware/webpack');

  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware);
}

app.use(morgan(isProduction ? 'combined' : 'dev'));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use('/assets', express.static(path.resolve(path.join( __dirname, '../app/assets' ))));
app.use(cacheData);
app.use(renderMiddleware);

app.listen(port, console.log(`Server running on port ${port}`));
