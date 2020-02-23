import React from 'react';

const PageCounter = props => {
 return (
  <>
   <span>
    Page {props.startPage} of {props.lastPage}
   </span>
   <span>Go to page</span>
   <input placeholder="200" />
  </>
 );
};
export default PageCounter;
