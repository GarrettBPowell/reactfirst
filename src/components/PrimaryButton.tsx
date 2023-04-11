import { FunctionComponent } from "react";
import styles from "./PrimaryButton.module.css";

const PrimaryButton: FunctionComponent = () => {
  return (
    <div className={styles.button}>
      <div className={styles.buttonText}>Primary Button</div>
    </div>
  );
};

export default PrimaryButton;
