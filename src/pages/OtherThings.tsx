import { FunctionComponent } from "react";
import ContainerButtons from "../components/ContainerButtons";
import styles from "./OtherThings.module.css";
const OtherThings: FunctionComponent = () => {
  return (
    <div className={styles.otherThings}>
      <div className={styles.warningPopup}>
        <ContainerButtons />
      </div>
    </div>
  );
};

export default OtherThings;
