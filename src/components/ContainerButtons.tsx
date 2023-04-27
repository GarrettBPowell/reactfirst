import { FunctionComponent } from "react";
import WarningPopup from "./WarningPopup";
import IgnoreButton from "./IgnoreButton";
import WarningContainer from "./WarningContainer";
import styles from "./ContainerButtons.module.css";
const ContainerButtons: FunctionComponent = () => {
  return (
    <div className={styles.contents}>
      <WarningPopup />
      <button className={styles.secondaryButton}>
        <IgnoreButton />
      </button>
      <div className={styles.topOfFrame}>
        <WarningContainer productIds="/tipsexclamationcircle1.svg" />
        <div className={styles.remove}>
          <div className={styles.menuTitle}>Remove Restaurant?</div>
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
              <button className={styles.removeItem1}>
                <div className={styles.removeText1}>An Item</div>
                <img
                  className={styles.removeButtonIcon}
                  alt=""
                  src="/remove-button7.svg"
                />
              </button>
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
        </div>
      </div>
    </div>
  );
};

export default ContainerButtons;
