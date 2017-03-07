import React from 'react';
import Routes from '../routes';

const Body = ({ data }) => (
  <div className="wrapper"> 
    {
      (data.current_page && data.current_page.attributes.start_page === true) ?
        <Routes data={ data } /> :
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Routes data={ data } />
            </div>
          </div>
        </div>
    }
  </div>
);

export default Body;