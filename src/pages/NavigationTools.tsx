import { FunctionComponent } from "react";
import SearchBar from "../components/SearchBar";
import styles from "./NavigationTools.module.css";

const NavigationTools: FunctionComponent = () => {
  return (
    <div className={styles.navigationTools}>
      <SearchBar />
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
                    src="/tipsplus21.svg"
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
            <img className={styles.frameItem} alt="" src="/ellipse-14.svg" />
            <div className={styles.spin}>SPIN</div>
          </div>
          <img className={styles.spinButtonChild} alt="" src="/group-122.svg" />
        </div>
      </div>
      <div className={styles.menuBar}>
        <div className={styles.menuBarInner}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.salads}>Salads</div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupItem} />
                <div className={styles.entres}>Entrées</div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.groupItem} />
                <div className={styles.sides}>Sides</div>
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.rectangleDiv} />
                <div className={styles.breakfast}>Breakfast</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationTools;
