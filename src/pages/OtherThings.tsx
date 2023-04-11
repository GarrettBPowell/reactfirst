import { FunctionComponent } from "react";
import WarningPopup from "../components/WarningPopup";
import IgnoreButton from "../components/IgnoreButton";
import styles from "./OtherThings.module.css";

const OtherThings: FunctionComponent = () => {
  return (
    <div className={styles.otherThings}>
      <div className={styles.warningPopup}>
        <div className={styles.contents}>
          <WarningPopup />
          <button className={styles.secondaryButton}>
            <IgnoreButton />
          </button>
          <div className={styles.topOfFrame}>
            <div className={styles.text}>
              <div className={styles.text}>
                <img
                  className={styles.tipsexclamationCircleIcon}
                  alt=""
                  src="/tipsexclamationcircle1.svg"
                />
                <div className={styles.warning}>Warning!</div>
              </div>
              <div className={styles.theFollowingRestaurants}>
                The following restaurants do not meet your allergy
                specifications
              </div>
            </div>
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
      </div>
    </div>
  );
};

export default OtherThings;
