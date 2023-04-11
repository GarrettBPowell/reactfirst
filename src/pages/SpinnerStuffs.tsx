import { FunctionComponent } from "react";
import SpinnerTitle from "../components/SpinnerTitle";
import DropdownMenuIcon from "../components/DropdownMenuIcon";
import SpinnerHeader from "../components/SpinnerHeader";
import styles from "./SpinnerStuffs.module.css";

const SpinnerStuffs: FunctionComponent = () => {
  return (
    <div className={styles.spinnerStuffs}>
      <SpinnerTitle />
      <DropdownMenuIcon />
      <div className={styles.spinButton}>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} alt="" src="/ellipse-211.svg" />
          <img className={styles.frameItem} alt="" src="/ellipse-111.svg" />
          <div className={styles.spin}>SPIN</div>
        </div>
        <img className={styles.spinButtonChild} alt="" src="/group-1211.svg" />
      </div>
      <SpinnerHeader />
    </div>
  );
};

export default SpinnerStuffs;
