import React from 'react';
import Icon from './Icon';

export default function(props){
  return (
    <Icon {...props}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13H5v-2h14v2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </Icon>
  );
}
