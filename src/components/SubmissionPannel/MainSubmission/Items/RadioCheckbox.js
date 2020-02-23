import React from 'react';

const RadioChecx = props => {
 return (
  <>
   <div>
    <input
     type={props.type}
     name={props.status}
     id={props.id ? props.id : null}
     value={props.inputValue}
     onChange={props.onChange}
    />
    <label htmlFor={props.id}>{props.inputValue}</label>
   </div>
  </>
 );
};

export default RadioChecx;
