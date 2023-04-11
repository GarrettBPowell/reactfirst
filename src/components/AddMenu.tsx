import { FunctionComponent } from "react";
import styles from "./AddMenu.module.css";

const AddMenu: FunctionComponent = () => {
  return (
    <div className={styles.addMenu}>
      <div className={styles.menuTitle}>Menu Title:</div>
      <div className={styles.frameParent}>
        <div className={styles.addItemParent}>
          <div className={styles.addItem}>
            <div className={styles.selectionAdderButton}>
              <div className={styles.button}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.buttonText}>A name in here</div>
              </div>
            </div>
          </div>
          <div className={styles.addItem}>
            <div className={styles.selectionAdderButton}>
              <div className={styles.button}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.buttonText}>A name in here</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addItemGroup}>
          <div className={styles.addItem}>
            <div className={styles.selectionAdderButton}>
              <div className={styles.button}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.buttonText}>A name in here</div>
              </div>
            </div>
          </div>
          <div className={styles.addItem}>
            <div className={styles.selectionAdderButton}>
              <div className={styles.button}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.buttonText}>A name in here</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addItemGroup}>
          <div className={styles.addItem}>
            <div className={styles.selectionAdderButton}>
              <div className={styles.button}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.buttonText}>A name in here</div>
              </div>
            </div>
          </div>
          <div className={styles.addItem}>
            <div className={styles.selectionAdderButton}>
              <div className={styles.button}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.buttonText}>A name in here</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addItemGroup}>
          <div className={styles.addItem}>
            <div className={styles.selectionAdderButton}>
              <div className={styles.button}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.buttonText}>A name in here</div>
              </div>
            </div>
          </div>
          <div className={styles.addItem}>
            <div className={styles.selectionAdderButton}>
              <button className={styles.button7}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.buttonText7}>A name in here</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.addItemParent}>
          <div className={styles.addItem}>
            <div className={styles.selectionAdderButton}>
              <div className={styles.button}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.buttonText}>A name in here</div>
              </div>
            </div>
          </div>
          <div className={styles.addItem}>
            <div className={styles.selectionAdderButton}>
              <div className={styles.button}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.buttonText}>A name in here</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addItemParent}>
          <div className={styles.addItem}>
            <div className={styles.selectionAdderButton}>
              <div className={styles.button}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.buttonText}>A name in here</div>
              </div>
            </div>
          </div>
          <div className={styles.addItem}>
            <div className={styles.selectionAdderButton}>
              <div className={styles.button}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.buttonText}>A name in here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
