import React from 'react';
import { Link } from 'react-router-dom';

const CategoryMenu = (props) => {
  const categories = props.data.blog_post_category.data;
  return (
    <div>
      <h1 className="title-block second-child">Kategorier</h1>
      <ul className="categories margin-bottom-30">
        {
          categories.map((category, index) => (
            <li key={index}>
              <Link to={`${props.match.url}/category/${category.attributes.slug}`}>{category.attributes.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default CategoryMenu;