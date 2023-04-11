import { FunctionComponent } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import PrimaryButton from "../components/PrimaryButton";
import DestructiveButton from "../components/DestructiveButton";
import DisabledButton1 from "../components/DisabledButton1";
import styles from "./TaskOrientedButtons.module.css";

const TaskOrientedButtons: FunctionComponent = () => {
  return (
    <div className={styles.taskOrientedButtons}>
      <div className={styles.primaryButton}>
        <Button
          variant="solid"
          w="282px"
          colorScheme="teal"
          rightIcon={<ArrowForwardIcon />}
        >
          Primary Button
        </Button>
      </div>
      <div className={styles.secondaryButton}>
        <PrimaryButton />
      </div>
      <div className={styles.destructiveButton}>
        <div className={styles.primaryButton1}>
          <div className={styles.button}>
            <DestructiveButton />
          </div>
        </div>
      </div>
      <div className={styles.primaryButton}>
        <div>
          <div className={styles.buttonText}>Primary Button</div>
        </div>
      </div>
      <div className={styles.disabledButton1}>
        <div className={styles.property1default}>
          <div className={styles.button1}>
            <DisabledButton1 />
          </div>
        </div>
        <div className={styles.property1disabledButton2}>
          <Button
            className={styles.button2}
            variant="solid"
            w="282px"
            colorScheme="teal"
            rightIcon={<ArrowForwardIcon />}
          >
            Disabled Button: #777B7D
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskOrientedButtons;
