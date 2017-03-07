import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StartPage from './templates/pages/StartPage';
import SubPage from './templates/pages/SubPage';
import Blog from './templates/blog/Index';
import Portfolio from './templates/portfolio/Index';
import NoMatch from './templates/pages/NoMatch';

const Routes = ({data}) => (
  <Switch>
    {
      Object.keys(data.pages).map(function(key, index) {
        var page = data.pages[key];
        if (page.attributes.start_page) {
          return <Route key={index} exact path={key} render={(props) => <StartPage {...props} data={data} />} />;
        } else if (page.meta.item_type.data.id === 'sub-page') {
          return <Route key={index} exact path={key} render={(props) => <SubPage {...props} data={data} />} />;
        } else if (page.meta.item_type.data.id === 'blog') {
          return <Route key={index} path={key} render={(props) => <Blog {...props} data={data} />} />;
        } else if (page.meta.item_type.data.id === 'portfolio') {
          return <Route key={index} path={key} render={(props) => <Portfolio {...props} data={data} />} />;
        }
      })
    }
    <Route render={(props) => <NoMatch {...props} data={data} />} />
  </Switch>
);

export default Routes;