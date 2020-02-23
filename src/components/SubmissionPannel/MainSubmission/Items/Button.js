import React from 'react';

const Button = props => {
 return (
  <button type={props.button} onClick={e => props.newPage(e)}>
   {props.title}
  </button>
 );
};

export default Button;
