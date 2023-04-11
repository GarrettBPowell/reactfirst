import { FunctionComponent } from "react";
import styles from "./RemoveMenu.module.css";

const RemoveMenu: FunctionComponent = () => {
  return (
    <div className={styles.removeMenu}>
      <div className={styles.removeButtonRow}>
        <div className={styles.removeItem}>
          <div className={styles.removeText}>An Item</div>
          <img
            className={styles.removeButtonIcon}
            alt=""
            src="/remove-button7.svg"
          />
        </div>
        <div className={styles.removeItem}>
          <div className={styles.removeText}>An Item</div>
          <img
            className={styles.removeButtonIcon}
            alt=""
            src="/remove-button7.svg"
          />
        </div>
      </div>
      <div className={styles.removeButtonRow}>
        <div className={styles.removeItem}>
          <div className={styles.removeText}>An Item</div>
          <img
            className={styles.removeButtonIcon}
            alt=""
            src="/remove-button7.svg"
          />
        </div>
        <div className={styles.removeItem}>
          <div className={styles.removeText}>An Item</div>
          <img
            className={styles.removeButtonIcon}
            alt=""
            src="/remove-button7.svg"
          />
        </div>
      </div>
      <div className={styles.removeButtonRow}>
        <div className={styles.removeItem}>
          <div className={styles.removeText}>An Item</div>
          <img
            className={styles.removeButtonIcon}
            alt=""
            src="/remove-button7.svg"
          />
        </div>
        <div className={styles.removeItem}>
          <div className={styles.removeText}>An Item</div>
          <img
            className={styles.removeButtonIcon}
            alt=""
            src="/remove-button7.svg"
          />
        </div>
      </div>
      <div className={styles.removeButtonRow}>
        <div className={styles.removeItem}>
          <div className={styles.removeText}>An Item</div>
          <img
            className={styles.removeButtonIcon}
            alt=""
            src="/remove-button7.svg"
          />
        </div>
        <div className={styles.removeItem}>
          <div className={styles.removeText}>An Item</div>
          <img
            className={styles.removeButtonIcon}
            alt=""
            src="/remove-button7.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default RemoveMenu;
