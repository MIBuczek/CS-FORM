import React from 'react';
import '../LogIn/LogIn.css';
import logoImage from '../../assets/images/cs-logo.png';

class LogIn extends React.Component {
 render() {
  return (
   <form className="wrapper__form">
    <input
     className="wrapper__input"
     type="text"
     placeholder="ID number"
     onChange={this.props.checkId}
    />
    <button className="wrapper__button" typ="button" onClick={this.props.logIn}>
     LOG IN
    </button>
    <img className="wrapper__img" src={logoImage} alt="logo" />
   </form>
  );
 }
}

export default LogIn;
