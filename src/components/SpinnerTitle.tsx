import { FunctionComponent } from "react";
import styles from "./SpinnerTitle.module.css";
const SpinnerTitle: FunctionComponent = () => {
  return (
    <div className={styles.spinnerTitle}>
      <div className={styles.workBuds}>Work Buds</div>
    </div>
  );
};

export default SpinnerTitle;
