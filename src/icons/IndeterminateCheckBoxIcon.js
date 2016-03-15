import React from 'react';
import Icon from './Icon';

export default function(){
  return (
    <Icon>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path d="M0 0h24v24H0z" id="a"/>
        </defs>
        <clipPath id="b">
          <use overflow="visible" />
        </clipPath>
        <path clip-path="url(#b)" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/>
      </svg>
    </Icon>
  );
}
