import { FunctionComponent, useCallback } from "react";
import SpinnerContainer from "../components/SpinnerContainer";
import { useNavigate } from "react-router-dom";
import styles from "./SpinHomePage31.module.css";
const SpinHomePage31: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFriendsContainerClick = useCallback(() => {
    navigate("/add-friends");
  }, [navigate]);

  return (
    <div className={styles.spinHomePage}>
      <div className={styles.header}>
        <img
          className={styles.generalmenuIcon}
          alt=""
          src="/generalmenu22.svg"
        />
      </div>
      <div className={styles.spinner}>
        <div className={styles.spinnerHeader}>
          <img
            className={styles.statusIconsvariant6}
            alt=""
            src="/status-iconsvariant61.svg"
          />
          <div className={styles.spinnerTitle}>
            <div className={styles.workBuds}>1st Spinner</div>
          </div>
          <img
            className={styles.dropdownMenuIcon}
            alt=""
            src="/dropdown-menu1.svg"
          />
        </div>
        <SpinnerContainer
          spinWheelBackground="/spinwheelbackground4.svg"
          polygon1="/polygon-11.svg"
          ellipse4="/ellipse-42.svg"
          ellipse5="/ellipse-52.svg"
          generalpen="/generalpen2.svg"
        />
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
                  src="/interactivebuttonhome4.svg"
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
                  src="/group-28.svg"
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
                  src="/interactivebuttonsearch11.svg"
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
                  src="/group-222.svg"
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
                    src="/tipsplus.svg"
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
            <img className={styles.frameChild} alt="" src="/ellipse-21.svg" />
            <img className={styles.frameItem} alt="" src="/ellipse-11.svg" />
            <div className={styles.spin}>SPIN</div>
          </div>
          <img
            className={styles.spinButtonChild}
            alt=""
            src="/group-1211.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SpinHomePage31;
