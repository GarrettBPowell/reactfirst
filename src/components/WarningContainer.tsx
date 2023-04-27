import { FunctionComponent } from "react";
import styles from "./WarningContainer.module.css";

type WarningContainerType = {
  productIds?: string;
};

const WarningContainer: FunctionComponent<WarningContainerType> = ({
  productIds,
}) => {
  return (
    <div className={styles.text}>
      <div className={styles.tipsexclamationCircleParent}>
        <img
          className={styles.tipsexclamationCircleIcon}
          alt=""
          src={productIds}
        />
        <div className={styles.warning}>Warning!</div>
      </div>
      <div className={styles.theFollowingRestaurants}>
        The following restaurants do not meet your allergy specifications
      </div>
    </div>
  );
};

export default WarningContainer;
