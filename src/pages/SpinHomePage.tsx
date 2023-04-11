import { FunctionComponent, useCallback } from "react";
import styles from "./SpinHomePage4.module.css";

const SpinHomePage4: FunctionComponent = () => {
  const onFriendsContainerClick = useCallback(() => {
    // Please sync "Add Friends" to the project
  }, []);

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
          <img className={styles.spinButtonChild} alt="" src="/group-124.svg" />
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
        <div className={styles.spinnerAndEdit}>
          <div className={styles.spinner1}>
            <div className={styles.spinner2}>
              <img
                className={styles.spinwheelbackgroundIcon}
                alt=""
                src="/spinwheelbackground4.svg"
              />
              <div className={styles.spincenter}>
                <img
                  className={styles.spincenterChild}
                  alt=""
                  src="/polygon-12.svg"
                />
                <img
                  className={styles.spincenterItem}
                  alt=""
                  src="/ellipse-42.svg"
                />
                <img
                  className={styles.spincenterInner}
                  alt=""
                  src="/ellipse-52.svg"
                />
                <div className={styles.spin1}>SPIN</div>
              </div>
              <div className={styles.resturants}>
                <div className={styles.pfChangs}>
                  <span className={styles.pfChangsTxtContainer}>
                    <p className={styles.pf}>PF</p>
                    <p className={styles.pf}>Changs</p>
                  </span>
                </div>
                <div className={styles.chipotle}>Chipotle</div>
                <div className={styles.mooyah}>Mooyah</div>
                <div className={styles.rollShack}>Roll Shack</div>
                <div className={styles.theFlippingEgg}>Flipping Egg</div>
                <div className={styles.redRobin}>Red Robin</div>
              </div>
            </div>
          </div>
          <button className={styles.editButton}>
            <button className={styles.button1}>
              <img
                className={styles.generalpenIcon}
                alt=""
                src="/generalpen2.svg"
              />
              <div className={styles.edit}>Edit</div>
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpinHomePage4;
