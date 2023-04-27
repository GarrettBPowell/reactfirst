import { FunctionComponent } from "react";
import styles from "./SpinnerHeader.module.css";
const SpinnerHeader: FunctionComponent = () => {
  return (
    <div className={styles.spinnerHeader}>
      <img
        className={styles.statusIconsvariant6}
        alt=""
        src="/status-iconsvariant6.svg"
      />
      <div className={styles.spinnerTitle}>
        <div className={styles.workBuds}>Typing</div>
      </div>
      <img
        className={styles.dropdownMenuIcon}
        alt=""
        src="/dropdown-menu11.svg"
      />
    </div>
  );
};

export default SpinnerHeader;
