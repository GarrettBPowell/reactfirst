import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SpinnerHeaderContainer.module.css";

type SpinnerHeaderContainerType = {
  workBudsText?: string;
  workBudsImageUrl?: string;

  /** Style props */
  propDisplay?: Property.Display;
};

const SpinnerHeaderContainer: FunctionComponent<SpinnerHeaderContainerType> = ({
  workBudsText,
  workBudsImageUrl,
  propDisplay,
}) => {
  const statusIconsVariant6Style: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={styles.spinnerHeader}>
      <img
        className={styles.statusIconsvariant6}
        alt=""
        src="/status-iconsvariant6.svg"
        style={statusIconsVariant6Style}
      />
      <div className={styles.spinnerTitle}>
        <div className={styles.workBuds}>{workBudsText}</div>
      </div>
      <img className={styles.dropdownMenuIcon} alt="" src={workBudsImageUrl} />
    </div>
  );
};

export default SpinnerHeaderContainer;
