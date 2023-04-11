import { FunctionComponent } from "react";
import AddMenu from "../components/AddMenu";
import RemoveButtonIcon from "../components/RemoveButtonIcon";
import CancelButton from "../components/CancelButton";
import ConfirmButton from "../components/ConfirmButton";
import NextButton from "../components/NextButton";
import RemoveMenu from "../components/RemoveMenu";
import SectionAdder from "../components/SectionAdder";
import EditButton from "../components/EditButton";
import styles from "./ButtonsAndAdders.module.css";

const ButtonsAndAdders: FunctionComponent = () => {
  return (
    <div className={styles.buttonsAndAdders}>
      <AddMenu />
      <RemoveButtonIcon />
      <div className={styles.cancelButton}>
        <CancelButton />
      </div>
      <div className={styles.button}>
        <img className={styles.tipsplusIcon} alt="" src="/tipsplus3.svg" />
        <ConfirmButton />
      </div>
      <div className={styles.forwardButton}>
        <div className={styles.button1}>
          <img className={styles.tipsplusIcon} alt="" src="/tipsplus11.svg" />
        </div>
        <NextButton />
      </div>
      <RemoveMenu />
      <SectionAdder />
      <div className={styles.editButton}>
        <EditButton />
      </div>
    </div>
  );
};

export default ButtonsAndAdders;
