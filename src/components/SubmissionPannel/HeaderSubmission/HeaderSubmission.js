import React from 'react';
import styles from '../HeaderSubmission/HeaderSubmission.module.scss';
import Logo from '../../../assets/images/cs-logo-w.png';

const HeaderSubmission = props => {
 return (
  <header className={styles.header__wrapper}>
   <nav className={styles.header__nav}>
    <ul className={styles.header__ul}>
     <button
      onClick={e => {
       props.logOut(e);
      }}
     >
      Log out.
     </button>
    </ul>
   </nav>
   <div className={styles.header__logo}>
    <img src={Logo} alt="logo" />
   </div>
   <div className={styles.header__button}>
    <button typ="button" onClick={e => props.newPage(e)}>
     Back main desk
    </button>
   </div>
   <h1 className={styles.header__h}>Matter submission</h1>
  </header>
 );
};

export default HeaderSubmission;
