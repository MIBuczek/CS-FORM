import React from 'react';

const ButtonTeam = props => {
 return (
  <>
   <button type={props.type} onClick={props.onClick}>
    {props.title}
   </button>
  </>
 );
};

export default ButtonTeam;
