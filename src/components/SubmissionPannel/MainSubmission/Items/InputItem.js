import React from 'react';

const InputItem = props => {
 return (
  <>
   <h2>{props.category}</h2>
   <input
    type={props.type}
    placeholder={props.placeholder}
    name={props.name}
    defaultValue={props.value}
    onChange={props.onChange}
   />
  </>
 );
};

export default InputItem;
