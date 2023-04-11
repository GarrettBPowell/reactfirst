import { FunctionComponent } from "react";
import styles from "./SearchBar.module.css";

const SearchBar: FunctionComponent = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.button}>
        <img
          className={styles.interactiveButtonsearchIcon}
          alt=""
          src="/interactivebuttonsearch4.svg"
        />
        <div className={styles.search}>Search</div>
      </div>
    </div>
  );
};

export default SearchBar;
