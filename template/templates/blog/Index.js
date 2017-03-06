import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Category from './Category';

const Blog = ({data, location}) => (
  <div>
    {
      console.log(location)
    }
    <h1>{data.current_page.attributes.display_name}</h1>
    <Route path="/blogg/category/:slug" component={Category} />
  </div>
);

export default Blog;