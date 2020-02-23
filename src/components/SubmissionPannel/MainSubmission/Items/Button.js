import React from 'react';

const Button = props => {
 return (
  <button type={props.button} onClick={props.onClick ? props.onClick : null}>
   {props.title}
  </button>
 );
};

export default Button;
