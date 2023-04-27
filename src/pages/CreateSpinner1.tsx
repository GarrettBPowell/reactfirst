import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CreateSoloSpinnerContainer from "../components/CreateSoloSpinnerContainer";
import styles from "./CreateSpinner1.module.css";
const CreateSpinner1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSecondaryButtonContainer1Click = useCallback(() => {
    navigate("/name-spinner");
  }, [navigate]);

  return (
    <div className={styles.createSpinner}>
      <div className={styles.createSpinner1}>
        <div className={styles.header}>
          <img
            className={styles.generalmenuIcon}
            alt=""
            src="/generalmenu31.svg"
          />
        </div>
      </div>
      <CreateSoloSpinnerContainer
        buttonText="Create  Solo Spinner"
        buttonText1="Create  Group Spinner"
        onSecondaryButtonContainer1Click={onSecondaryButtonContainer1Click}
      />
      <div className={styles.navigationBar}>
        <div className={styles.footer}>
          <div className={styles.navMenu}>
            <div className={styles.navMenuChild} />
            <div className={styles.navMenu1}>
              <div className={styles.home}>
                <img
                  className={styles.interactiveButtonhomeIcon}
                  alt=""
                  src="/interactivebuttonhome3.svg"
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
                  src="/group-24.svg"
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
                  src="/interactivebuttonsearch3.svg"
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
                  src="/group-26.svg"
                />
                <div className={styles.label}>Friends</div>
                <div className={styles.badgeWrapper}>
                  <div className={styles.badge}>
                    <div className={styles.placeholder} />
                  </div>
                </div>
              </div>
              <div className={styles.add}>
                <div className={styles.button}>
                  <img
                    className={styles.tipsplusIcon}
                    alt=""
                    src="/tipsplus2.svg"
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
            <img className={styles.frameItem} alt="" src="/ellipse-13.svg" />
            <div className={styles.spin}>SPIN</div>
          </div>
          <img className={styles.spinButtonChild} alt="" src="/group-122.svg" />
        </div>
      </div>
    </div>
  );
};

export default CreateSpinner1;
