import React from 'react';

const Category = ({params, pathname, location, pattern}) => (
  <div>
    <h1>Category - {pathname} - {params}</h1>
  </div>
);

export default Category;
