import { FunctionComponent } from "react";
import styles from "./SpinHomePage11.module.css";
const SpinHomePage11: FunctionComponent = () => {
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
                  src="/group-29.svg"
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
              <div className={styles.home}>
                <img
                  className={styles.friendsChild}
                  alt=""
                  src="/group-211.svg"
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
            <img className={styles.frameChild} alt="" src="/ellipse-2.svg" />
            <img className={styles.frameItem} alt="" src="/ellipse-14.svg" />
            <div className={styles.spin}>SPIN</div>
          </div>
          <img className={styles.spinButtonChild} alt="" src="/group-126.svg" />
        </div>
      </div>
      <div className={styles.header}>
        <img
          className={styles.generalmenuIcon}
          alt=""
          src="/generalmenu11.svg"
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
            src="/dropdown-menu3.svg"
          />
        </div>
        <div className={styles.spinnerAndEdit}>
          <div className={styles.spinner1}>
            <div className={styles.spinner2}>
              <img
                className={styles.spinwheelbackgroundIcon}
                alt=""
                src="/spinwheelbackground11.svg"
              />
              <div className={styles.spincenter}>
                <img
                  className={styles.spincenterChild}
                  alt=""
                  src="/polygon-13.svg"
                />
                <img
                  className={styles.spincenterItem}
                  alt=""
                  src="/ellipse-43.svg"
                />
                <img
                  className={styles.spincenterInner}
                  alt=""
                  src="/ellipse-53.svg"
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
          <div className={styles.editButton}>
            <div className={styles.button1}>
              <img
                className={styles.generalpenIcon}
                alt=""
                src="/generalpen3.svg"
              />
              <div className={styles.edit}>Edit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinHomePage11;
