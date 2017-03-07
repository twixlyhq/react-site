import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Single from './Single';
import Category from './Category';

const Blog = ({data, location}) => (
  <div>
    <h1 className="title-lg"><span>{ data.current_page ? data.current_page.attributes.title : 'Blogg' }</span></h1>
    <div className="container">
      <Link to="/blogg/category/design">Category: design</Link>
      <Switch>
        <Route exact path="/blogg/category/:slug" component={Category} />
      </Switch>
      
    </div>
  </div>
);

export default Blog;