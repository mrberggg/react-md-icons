import React from 'react';

export default function(props){
  return (
    <span className="md-icons" {...props}>
      {props.children}
    </span>
  );
}
