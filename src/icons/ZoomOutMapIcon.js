import React from 'react';
import Icon from './Icon';

export default function(props){
  return (
    <Icon {...props}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path d="M0 0h24v24H0z" id="a"/>
        </defs>
        <clipPath id="b">
          <use overflow="visible" />
        </clipPath>
        <path clip-path="url(#b)" d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z"/>
        <path clip-path="url(#b)" d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </Icon>
  );
}
