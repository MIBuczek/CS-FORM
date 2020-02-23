import React from 'react';
import Header from './Header/Header';
import MainItems from './MainItems/MainItems';
import Footer from './Footer/Footer';
import SubmissionPannel from '../SubmissionPannel/SubmissionPannel';

class TeamPannel extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   matter: false
  };
 }
 newMatter = () => {
  this.setState({ matter: !this.state.matter });
 };
 render() {
  if (this.state.matter === false) {
   return (
    <>
     <Header newPage={this.newMatter} logOut={this.props.logOut} />
     <MainItems />
     <Footer />
    </>
   );
  } else if (this.state.matter === true) {
   return (
    <SubmissionPannel newPage={this.newMatter} logOut={this.props.logOut} />
   );
  }
 }
}
export default TeamPannel;
