import { FunctionComponent } from "react";
import styles from "./IgnoreButton.module.css";

const IgnoreButton: FunctionComponent = () => {
  return (
    <div className={styles.button}>
      <div className={styles.buttonText}>Ignore</div>
    </div>
  );
};

export default IgnoreButton;
