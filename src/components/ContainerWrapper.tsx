import { FunctionComponent, useCallback } from "react";
import WarningContainer from "./WarningContainer";
import styles from "./ContainerWrapper.module.css";
const ContainerWrapper: FunctionComponent = () => {
  const onRemoveButtonIcon8Click = useCallback(() => {
    // Please sync "Dietary Prefs - 1 Removed" to the project
  }, []);

  return (
    <div className={styles.contents}>
      <div className={styles.background} />
      <div className={styles.secondaryButton}>
        <div className={styles.button}>
          <div className={styles.buttonText}>Ignore</div>
        </div>
      </div>
      <div className={styles.topOfFrame}>
        <WarningContainer productIds="/tipsexclamationcircle.svg" />
        <div className={styles.remove}>
          <div className={styles.menuTitle}>Remove Restaurant?</div>
          <div className={styles.removeMenu}>
            <div className={styles.removeButtonRow}>
              <div className={styles.removeItem}>
                <div className={styles.removeText}>Flipping Egg</div>
                <img
                  className={styles.removeButtonIcon}
                  alt=""
                  src="/remove-button21.svg"
                  onClick={onRemoveButtonIcon8Click}
                />
              </div>
              <div className={styles.removeItem1}>
                <div className={styles.removeText}>An Item</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button3.svg"
                />
              </div>
            </div>
            <div className={styles.removeButtonRow1}>
              <div className={styles.removeItem}>
                <div className={styles.removeText}>An Item</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button21.svg"
                />
              </div>
              <div className={styles.removeItem}>
                <div className={styles.removeText}>An Item</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button3.svg"
                />
              </div>
            </div>
            <div className={styles.removeButtonRow1}>
              <div className={styles.removeItem}>
                <div className={styles.removeText}>An Item</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button21.svg"
                />
              </div>
              <div className={styles.removeItem}>
                <div className={styles.removeText}>An Item</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button3.svg"
                />
              </div>
            </div>
            <div className={styles.removeButtonRow1}>
              <div className={styles.removeItem}>
                <div className={styles.removeText}>An Item</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button21.svg"
                />
              </div>
              <div className={styles.removeItem}>
                <div className={styles.removeText}>An Item</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerWrapper;
