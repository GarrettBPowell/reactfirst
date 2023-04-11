import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrimaryButtonContainerClick = useCallback(() => {
    navigate("/create-spinner");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.header}>
        <img
          className={styles.generalmenuIcon}
          alt=""
          src="/generalmenu6.svg"
        />
      </div>
      <div className={styles.login1}>Login</div>
      <div className={styles.frameParent}>
        <div className={styles.usernameParent}>
          <div className={styles.username}>Username:</div>
          <div className={styles.definitelyyourusernameWrapper}>
            <div
              className={styles.definitelyyourusername}
            >{`definitelyYourUsername `}</div>
          </div>
        </div>
        <div className={styles.usernameParent}>
          <div className={styles.username}>Password:</div>
          <div className={styles.definitelyyourusernameWrapper}>
            <div className={styles.div}>***************</div>
          </div>
        </div>
        <div
          className={styles.primaryButton}
          onClick={onPrimaryButtonContainerClick}
        >
          <button className={styles.button}>
            <div className={styles.buttonText}>Login</div>
          </button>
        </div>
        <div className={styles.newMakeAnContainer}>
          <p className={styles.new}>{`New? `}</p>
          <p className={styles.new}>Make an account!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
