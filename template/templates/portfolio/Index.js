import React from 'react';

const Portfolio = ({ data, props }) => {
  return (
    <h1 className="title-lg"><span>{ data.current_page.attributes.title }</span></h1>
  );
};

export default Portfolio;
