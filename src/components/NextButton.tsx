import { FunctionComponent } from "react";
import styles from "./NextButton.module.css";

const NextButton: FunctionComponent = () => {
  return (
    <img
      className={styles.directionarrowRightIcon}
      alt=""
      src="/directionarrowright3.svg"
    />
  );
};

export default NextButton;
