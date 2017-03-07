import React from 'react';
import { Link } from 'react-router-dom';

const CategoryMenu = (props) => {
  
  return (
    <div>
      <h1 className="title-block second-child">Kategorier</h1>
      <ul className="categories margin-bottom-30">
        <li>
          <Link to={`${props.match.url}/category/design`}>Rendering with React</Link>
        </li>
        <li>
          <a href="category_url">category.attributes.title</a>
        </li>
      </ul>
    </div>
  );
};

export default CategoryMenu;