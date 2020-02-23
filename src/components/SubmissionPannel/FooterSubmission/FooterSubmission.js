import React from 'react';
import styles from '../FooterSubmission/FooterSubmission.module.scss';
import Logo from '../../../assets/images/cs-logo.png';

const FooterSubmission = () => {
 return (
  <footer className={styles.footer__wrapper}>
   <ul className={styles.footer__ul}>
    <li className={styles.footer__li}>Lorem</li>
    <li className={styles.footer__li}>Lorem</li>
    <li className={styles.footer__li}>LoremIpsum</li>
   </ul>
   <span className={styles.footer__s}>Lorem Ipsum</span>
   <div className={styles.footer__dLogo}>
    <span>Copyright© Lorem Ipsum</span>
    <img src={Logo} alt="logo" />
   </div>
  </footer>
 );
};

export default FooterSubmission;
