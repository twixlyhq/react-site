import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Posts from './Posts';
import Single from './Single';
import Category from './Category';
import CategoryMenu from './partials/CategoryMenu';

const Blog = (props) => {
  return (
    <div className="row">
      <div className="col-sm-9">
        <Route exact path={props.match.url} render={(routeProps) => <Posts {...routeProps} data={props.data} />} />
        <Route exact path={`${props.match.url}/post/:slug`} render={(routeProps) => <Single {...routeProps} data={props.data} />} />
        <Route exact path={`${props.match.url}/category/:slug`} render={(routeProps) => <Category {...routeProps} data={props.data} />} />
      </div>
      <div className="col-sm-3">
        <CategoryMenu {...props} />
      </div>
    </div>
  );  
};

export default Blog;