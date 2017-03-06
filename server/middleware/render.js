/* global VENDOR_BUNDLE: true, CLIENT_BUNDLE: true */
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import Helmet from "react-helmet";

import App from '../../template/app';

export default function render(req, res) {
  const context = {};

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App location={{ getUrl: function() { return req.url } }} />
    </StaticRouter>,
  );

  if (context.url) {
    return res.redirect(302, context.url);
  }

  const css = styleSheet.getCSS();
  let head = Helmet.rewind();

  return res
    .status(context.status || 200)
    .send(`
      <!doctype html>
      <html lang="en">
        <head>
          ${head.meta}
          ${head.title}
          <link rel="stylesheet" href="/assets/css/style.css"></link>
          <link rel="stylesheet" href="/assets/css/default.css"></link>
          <link rel="stylesheet" href="/assets/css/animate.css"></link>
          <link rel="stylesheet" href="/assets/fonts/font-awesome/css/font-awesome.min.css"></link>
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800"></link>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
          <script src="/assets/js/bootstrap.min.js"></script>
          <script src="/assets/js/scrolltopcontrol.js"></script>
          <script src="/assets/js/default.js"></script>
          <script src="${VENDOR_BUNDLE}"></script>
          <script src="${CLIENT_BUNDLE}"></script>
        </body>
      </html>
    `);
}
