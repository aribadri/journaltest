import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";
import classNames from "classnames";

const Layout = ({theme, modal ,setModal}) => {
  const showModal = () => {
    setModal(true)
  }

  return (
    <>
      <header className={styles.header}data-theme={theme} >
        <Link to="/">
          <div className={styles.logo}></div>
        </Link>
        <div className={styles.linksContainer}>
          <Link className={classNames(styles.link, styles.rightLink)} to={`/`}>
            О компании
          </Link>
          <Link className={classNames(styles.link, styles.centerLink)} to="/">
            Услуги
          </Link>
          <Link className={classNames(styles.link, styles.rightLink)} to="/">
            Журнал
          </Link>
          <Link className={classNames(styles.link, styles.rightLink)} to="/">
            Кейсы
          </Link>
          <Link
            className={classNames(styles.link, styles.rightLink)}
            to="/post/3"
          >
            Контакты
          </Link>
        </div>
      </header>

      <div className={styles.headerMobile} data-theme={theme}>
      
        <Link to="/">
          <div className={styles.mobileLogo}></div>
        </Link>
        <div className={styles.burgerMenu} onClick={showModal}>
            <div className={styles.burgerDote}></div>
            <div className={styles.burgerDote}></div>
            <div className={styles.burgerDote}></div>

        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
