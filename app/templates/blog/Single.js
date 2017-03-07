import React from 'react';

const Single = ({ data, location }) => (
  <div>
    {
      console.log(data)
    }
    <h1 className="title-lg"><span>{ data.current_page ? data.current_page.attributes.title : 'asdf' }</span></h1>
  </div>
);

export default Single;