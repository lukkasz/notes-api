import React from 'react';

export default function(props) {
  return(
    <div>
      <h1>Main</h1>
      <hr/>
      {props.children}
    </div>  
  );
}