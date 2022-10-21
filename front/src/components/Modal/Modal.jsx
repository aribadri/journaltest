import React from "react";
import styles from "./Modal.module.css";
import classNames from "classnames";

const Modal = ({ setModal }) => {
  const hideModal = () => {
    setModal(false);
  };
  return (
    <div className={styles.modalContainer}>
      <div className={styles.circleContainer}>
        {/* <div className={styles.circle}></div> */}
      </div>
      <div className={styles.arrowBack} onClick={hideModal}></div>
      <div className={styles.anchorContainer}>
        <div className={styles.text}>О КОМПАНИИ</div>
        <div className={styles.text}>УСЛУГИ</div>
        <div className={classNames(styles.text, styles.centerText)}>
          КОНТАКТЫ
        </div>
        <div className={styles.text}>ЖУРНАЛ</div>
      </div>
      <div className={styles.socialLinks}></div>
      <div className={styles.socialDescription}>* являются экстремистскими в РФ</div>
    </div>
  );
};

export default Modal;
