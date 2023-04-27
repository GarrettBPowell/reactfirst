import { FunctionComponent } from "react";
import SpinnerHeaderContainer from "./SpinnerHeaderContainer";
import styles from "./WorkBudsContainer.module.css";
const WorkBudsContainer: FunctionComponent = () => {
  return (
    <div className={styles.spinner}>
      <SpinnerHeaderContainer
        workBudsText="Work Buds"
        workBudsImageUrl="/dropdown-menu11.svg"
      />
      <div className={styles.spinnerAndEdit}>
        <div className={styles.spinner1}>
          <div className={styles.spinner2}>
            <img
              className={styles.spinwheelbackgroundIcon}
              alt=""
              src="/spinwheelbackground1.svg"
            />
            <button className={styles.spincenter}>
              <img
                className={styles.spincenterChild}
                alt=""
                src="/polygon-1.svg"
              />
              <img
                className={styles.spincenterItem}
                alt=""
                src="/ellipse-4.svg"
              />
              <img
                className={styles.spincenterInner}
                alt=""
                src="/ellipse-5.svg"
              />
              <div className={styles.spin}>SPIN</div>
            </button>
            <div className={styles.resturants}>
              <div className={styles.pfChangs}>Sonic</div>
              <div className={styles.chipotle}>Chipotle</div>
              <div className={styles.mooyah}>Mooyah</div>
              <div className={styles.rollShack}>Roll Shack</div>
              <div className={styles.theFlippingEgg}>Whataburger</div>
              <div className={styles.redRobin}>Red Robin</div>
            </div>
          </div>
        </div>
        <div className={styles.editButton}>
          <div className={styles.button}>
            <img
              className={styles.generalpenIcon}
              alt=""
              src="/generalpen.svg"
            />
            <div className={styles.edit}>Edit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkBudsContainer;
