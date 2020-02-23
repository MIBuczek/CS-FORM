import React from 'react';
import styles from '../src/Form.module.scss';
import TeamPannel from './components/TeamPannel/TeamPannel';
import LogIn from './components/LogIn/LogIn';
import Data from './data/data.json';

class Form extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   loged: false,
   id: [],
   loggin: 0
  };
 }
 componentDidMount() {
  fetch(`http://localhost:4000/Users`)
   .then(resp => resp.json())
   .then(resp => {
    resp.map(person => {
     return this.setState({ id: [...this.state.id, person.Id] });
    });
   });
 }
 checkId = e => {
  e.preventDefault();
  this.setState({ loggin: parseInt(e.target.value) });
 };

 logUsers = e => {
  e.preventDefault();
  if (this.state.id.includes(this.state.loggin) === true) {
   this.setState({ loged: true });
  }
 };

 logOut = e => {
  e.preventDefault();
  this.setState({ loged: false });
 };

 render() {
  if (this.state.loged === false) {
   return (
    <div className={styles.wrapper}>
     <LogIn logIn={this.logUsers} checkId={this.checkId} />
    </div>
   );
  } else if (this.state.loged === true) {
   return (
    <div className={styles.wrapper}>
     <TeamPannel data={Data} logOut={this.logOut} />
    </div>
   );
  }
 }
}

export default Form;
