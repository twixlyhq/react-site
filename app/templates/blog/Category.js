import React from 'react';

const Category = ({ location, match }) => (
  <div>
    <h1>Category - { match.params.slug }</h1>
  </div>
);

export default Category;
