import React from 'react';
import styles from './Footer.module.css'

const Footer = ({theme}) => {
    return (
<>
            <div className={styles.footer} data-theme={theme}>
          <div className={styles.footerLogo}></div>
          <div className={styles.adress}>Пресненская наб., 12, Башня Федерация, 55 этаж</div>
          <div className={styles.year}>2022</div>
      </div>
      <div className={styles.mobileFooter} data-theme={theme}>
      <div className={styles.mobileFooterLogo}></div>
          <div className={styles.mobileYear}>2022</div>
          <div className={styles.mobileAdress}>Пресненская наб., 12, Башня Федерация, 55 этаж</div>
      </div>
</>

    );
}

export default Footer;
