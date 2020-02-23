import React from 'react';

const Textarea = props => {
 return (
  <>
   <h2>{props.title}</h2>
   <textarea
    name={props.name}
    placeholder={props.place}
    onChange={props.onChange}
   ></textarea>
  </>
 );
};

export default Textarea;
