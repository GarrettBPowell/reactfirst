import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NameSpinner3.module.css";
const NameSpinner3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/name-spinner3");
  }, [navigate]);

  return (
    <div className={styles.nameSpinner}>
      <div className={styles.createSpinner}>
        <div className={styles.header}>
          <img
            className={styles.directionarrowRightIcon}
            alt=""
            src="/directionarrowright.svg"
          />
          <img
            className={styles.generalmenuIcon}
            alt=""
            src="/generalmenu31.svg"
          />
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
      <div className={styles.nameYourGroupContainer}>
        <p className={styles.nameYour}>{`Name Your `}</p>
        <p className={styles.nameYour}>Group Spinner</p>
      </div>
      <div className={styles.menuTitleParent} onClick={onFrameContainer1Click}>
        <div className={styles.menuTitle}>Name:</div>
        <div className={styles.searchBar}>
          <div className={styles.button1}>
            <img
              className={styles.interactiveButtonsearchIcon1}
              alt=""
              src="/interactivebuttonsearch1.svg"
            />
            <div className={styles.search} />
          </div>
        </div>
      </div>
      <div className={styles.secondaryButton}>
        <div className={styles.button2}>
          <div className={styles.buttonText}>Continue</div>
        </div>
      </div>
    </div>
  );
};

export default NameSpinner3;
