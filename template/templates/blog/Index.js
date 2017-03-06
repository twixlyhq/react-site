import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Category from './Category';

const Blog = ({data, location}) => (
  <div>
    {
      console.log(location)
    }
    <h1 className="title-lg"><span>{ data.current_page.attributes.title }</span></h1>
    <Route path="/blogg/category/:slug" component={Category} />
  </div>
);

export default Blog;