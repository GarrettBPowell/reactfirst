import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateSpinner.module.css";
const CreateSpinner: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSecondaryButtonClick = useCallback(() => {
    navigate("/dietary-prefs");
  }, [navigate]);

  return (
    <div className={styles.createSpinner}>
      <div className={styles.createSpinner1}>
        <div className={styles.header}>
          <img
            className={styles.generalmenuIcon}
            alt=""
            src="/generalmenu4.svg"
          />
        </div>
      </div>
      <button
        className={styles.secondaryButton}
        onClick={onSecondaryButtonClick}
      >
        <div className={styles.button}>
          <div className={styles.buttonText}>Create Solo Spinner</div>
        </div>
      </button>
    </div>
  );
};

export default CreateSpinner;
