import React from 'react';

const NotFound = (props) => {
  const { staticContext = {} } = props;
  staticContext.notFound = true;
  
  return <h1>Oops, 404 Not Found</h1>;
}

export default NotFound;