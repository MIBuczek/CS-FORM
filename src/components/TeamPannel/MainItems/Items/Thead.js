import React from 'react';

const Thead = props => {
 return (
  <tr className={props.class}>
   <th>ID</th>
   <th>Raised on</th>
   <th>Update on</th>
   <th>Status</th>
   <th>Description</th>
   <th>Category</th>
   <th>Impacted Businesses</th>
   <th>Impacted Countries</th>
   <th>Impacted Entities</th>
   <th>APAC GC Lead</th>
   <th>Attachments</th>
   <th>Author</th>
   <th>Control</th>
  </tr>
 );
};

export default Thead;
