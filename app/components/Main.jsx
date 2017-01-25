import React from 'react';

export default function(props) {
  return(
    <div className="main-header">
      <h1 className="main-headline">Notes</h1>
      <hr/>
      <div className="container">
        {props.children}
      </div>
    </div>  
  );
}