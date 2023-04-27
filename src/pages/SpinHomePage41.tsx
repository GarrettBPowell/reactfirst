import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SpinnerContainer from "../components/SpinnerContainer";
import styles from "./SpinHomePage41.module.css";
const SpinHomePage41: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFriendsContainerClick = useCallback(() => {
    navigate("/add-friends");
  }, [navigate]);

  return (
    <div className={styles.spinHomePage}>
      <div className={styles.navigationBar}>
        <div className={styles.footer}>
          <div className={styles.navMenu}>
            <div className={styles.navMenuChild} />
            <div className={styles.navMenu1}>
              <div className={styles.home}>
                <img
                  className={styles.interactiveButtonhomeIcon}
                  alt=""
                  src="/interactivebuttonhome2.svg"
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
                  src="/group-23.svg"
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
              <div className={styles.friends} onClick={onFriendsContainerClick}>
                <img
                  className={styles.friendsChild}
                  alt=""
                  src="/group-27.svg"
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
            <img className={styles.frameItem} alt="" src="/ellipse-12.svg" />
            <div className={styles.spin}>SPIN</div>
          </div>
          <img className={styles.spinButtonChild} alt="" src="/group-125.svg" />
        </div>
      </div>
      <div className={styles.header}>
        <img
          className={styles.generalmenuIcon}
          alt=""
          src="/generalmenu7.svg"
        />
      </div>
      <div className={styles.spinner}>
        <div className={styles.spinnerHeader}>
          <img
            className={styles.statusIconsvariant6}
            alt=""
            src="/status-iconsvariant6.svg"
          />
          <div className={styles.spinnerTitle}>
            <div className={styles.workBuds}>1st Spinner</div>
          </div>
          <img
            className={styles.dropdownMenuIcon}
            alt=""
            src="/dropdown-menu2.svg"
          />
        </div>
        <SpinnerContainer
          spinWheelBackground="/spinwheelbackground41.svg"
          polygon1="/polygon-12.svg"
          ellipse4="/ellipse-41.svg"
          ellipse5="/ellipse-521.svg"
          generalpen="/generalpen21.svg"
          pFChangsJustifyContent="center"
          pFChangsHeight="389px"
          pFChangsFlexShrink="0"
        />
      </div>
    </div>
  );
};

export default SpinHomePage41;
