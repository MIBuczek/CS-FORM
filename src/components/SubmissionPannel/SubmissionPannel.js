import React from 'react';
import HeaderSubmission from './HeaderSubmission/HeaderSubmission';
import MainSubmision from './MainSubmission/MainSubmission';
import FooterSubmission from './FooterSubmission/FooterSubmission';

const SubmissionPannel = props => {
 return (
  <>
   <HeaderSubmission newPage={props.newPage} logOut={props.logOut} />;
   <MainSubmision newPage={props.newPage} />
   <FooterSubmission />
  </>
 );
};

export default SubmissionPannel;
