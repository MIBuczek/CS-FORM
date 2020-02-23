import React from 'react';
import styles from '../Header/Header.module.scss';

class Header extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }
 render() {
  return (
   <header className={styles.header}>
    <nav className={styles.header__nav}>
     <ul className={styles.header__ul}>
      <button
       onClick={e => {
        this.props.logOut(e);
       }}
      >
       Log out.
      </button>
     </ul>
    </nav>
    <h1 className={styles.header__h}>Online Reporting - GCMC</h1>
    <button className={styles.header__b} onClick={e => this.props.newPage(e)}>
     Create a new matter
    </button>
    <div className={styles.header__d}></div>
   </header>
  );
 }
}

export default Header;
