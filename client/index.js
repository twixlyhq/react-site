import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';

import App from '../template/app';
import getData from '../data-store/get-data';

getData(function(err, data) {
  startApp();
});

function startApp() {
  render(
    <Router>
      <App location={{ getUrl: function() { return location.pathname } }} />
    </Router>,
    document.getElementById('root')
  );
}

if (module.hot) {
  module.hot.accept();
}