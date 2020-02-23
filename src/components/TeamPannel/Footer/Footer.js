import React from 'react';
import styles from '..//Footer/Footer.module.scss';

class Footer extends React.Component {
 render() {
  return (
   <footer className={styles.footer}>
    <div className={styles.footer__d}></div>
    <h1 className={styles.footer__h}>APAC GC active items</h1>
   </footer>
  );
 }
}

export default Footer;
