import React from 'react';
import LayoutDefault from './layouts/Default';

var helper = require('../data-store/helper.js');

const App = ({location}) => {
  const url = location.getUrl();
  
  // console.log('url: ', url);

  let data = helper.getPathData(url);
  
  // console.log('data: ', data);

  if (!data.current_page) {
    console.log(url);
    console.log('NO DATA');
    // return false;
  }
  
  return (
    <LayoutDefault data={ data } />
  );
};

export default App;