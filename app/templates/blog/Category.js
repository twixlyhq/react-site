import React from 'react';

import PostList from './partials/PostList';

const Category = (props) => (
  <div>
    <h1>Category - { props.match.params.slug }</h1>
    <PostList {...props} />
  </div>
);

export default Category;
