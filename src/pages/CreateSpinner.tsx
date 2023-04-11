import { FunctionComponent, useCallback } from "react";
import styles from "./CreateSpinner2.module.css";

const CreateSpinner2: FunctionComponent = () => {
  const onSecondaryButtonContainerClick = useCallback(() => {
    // Please sync "Dietary Prefs - 1 Removed" to the project
  }, []);

  return (
    <div className={styles.createSpinner}>
      <div className={styles.createSpinner1}>
        <div className={styles.header}>
          <img
            className={styles.generalmenuIcon}
            alt=""
            src="/generalmenu11.svg"
          />
        </div>
      </div>
      <div className={styles.secondaryButtonParent}>
        <div
          className={styles.secondaryButton}
          onClick={onSecondaryButtonContainerClick}
        >
          <div className={styles.button}>
            <div className={styles.buttonText}>Edit Allergies</div>
          </div>
        </div>
        <div className={styles.secondaryButton1}>
          <div className={styles.button}>
            <div className={styles.buttonText}>Edit Restaurants</div>
          </div>
        </div>
      </div>
      <div className={styles.navigationBar}>
        <div className={styles.footer}>
          <div className={styles.navMenu}>
            <div className={styles.navMenuChild} />
            <div className={styles.navMenu1}>
              <div className={styles.home}>
                <img
                  className={styles.interactiveButtonhomeIcon}
                  alt=""
                  src="/interactivebuttonhome1.svg"
                />
                <div className={styles.label}>Home</div>
                <div className={styles.badgeWrapper}>
                  <div className={styles.badge}>
                    <div className={styles.placeholder} />
                  </div>
                </div>
              </div>
              <div className={styles.home}>
                <img
                  className={styles.profileChild}
                  alt=""
                  src="/group-221.svg"
                />
                <div className={styles.label}>Profile</div>
                <div className={styles.badgeWrapper}>
                  <div className={styles.badge}>
                    <div className={styles.placeholder} />
                  </div>
                </div>
              </div>
              <div className={styles.home}>
                <img
                  className={styles.interactiveButtonhomeIcon}
                  alt=""
                  src="/interactivebuttonsearch2.svg"
                />
                <div className={styles.label}>Search</div>
                <div className={styles.badgeWrapper}>
                  <div className={styles.badge}>
                    <div className={styles.placeholder} />
                  </div>
                </div>
              </div>
              <div className={styles.home}>
                <img
                  className={styles.friendsChild}
                  alt=""
                  src="/group-231.svg"
                />
                <div className={styles.label}>Friends</div>
                <div className={styles.badgeWrapper}>
                  <div className={styles.badge}>
                    <div className={styles.placeholder} />
                  </div>
                </div>
              </div>
              <div className={styles.add}>
                <div className={styles.button2}>
                  <img
                    className={styles.tipsplusIcon}
                    alt=""
                    src="/tipsplus1.svg"
                  />
                </div>
                <div className={styles.badgeWrapper4}>
                  <div className={styles.badge}>
                    <div className={styles.placeholder} />
                  </div>
                </div>
                <div className={styles.label3}>New</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.spinButton}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-22.svg" />
            <img className={styles.frameItem} alt="" src="/ellipse-112.svg" />
            <div className={styles.spin}>SPIN</div>
          </div>
          <img
            className={styles.spinButtonChild}
            alt=""
            src="/group-1212.svg"
          />
        </div>
      </div>
      <div className={styles.header1}>
        <img
          className={styles.directionarrowRightIcon}
          alt=""
          src="/directionarrowright1.svg"
        />
        <img
          className={styles.generalmenuIcon}
          alt=""
          src="/generalmenu11.svg"
        />
      </div>
    </div>
  );
};

export default CreateSpinner2;
