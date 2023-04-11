import { FunctionComponent } from "react";
import styles from "./EditButton.module.css";

const EditButton: FunctionComponent = () => {
  return (
    <div className={styles.button}>
      <img className={styles.generalpenIcon} alt="" src="/generalpen11.svg" />
      <div className={styles.edit}>Edit</div>
    </div>
  );
};

export default EditButton;
