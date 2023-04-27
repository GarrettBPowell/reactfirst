import { FunctionComponent } from "react";
import UserFormContainer from "../components/UserFormContainer";
import styles from "./Login.module.css";
const Login: FunctionComponent = () => {
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
      <UserFormContainer />
    </div>
  );
};

export default Login;
