import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./CreateSoloSpinnerContainer.module.css";

type CreateSoloSpinnerContainerType = {
  buttonText?: string;
  buttonText1?: string;

  /** Style props */
  buttonCursor?: Property.Cursor;
  buttonTextBackgroundColor?: Property.BackgroundColor;
  propCursor?: Property.Cursor;
  propBackgroundColor?: Property.BackgroundColor;

  /** Action props */
  onSecondaryButtonContainerClick?: () => void;
  onSecondaryButtonContainer1Click?: () => void;
};

const CreateSoloSpinnerContainer: FunctionComponent<
  CreateSoloSpinnerContainerType
> = ({
  buttonText,
  buttonText1,
  buttonCursor,
  buttonTextBackgroundColor,
  propCursor,
  propBackgroundColor,
  onSecondaryButtonContainerClick,
  onSecondaryButtonContainer1Click,
}) => {
  const secondaryButtonStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: buttonCursor,
    };
  }, [buttonCursor]);

  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: buttonTextBackgroundColor,
    };
  }, [buttonTextBackgroundColor]);

  const secondaryButton1Style: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const button1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.secondaryButtonParent}>
      <div
        className={styles.secondaryButton}
        style={secondaryButtonStyle}
        onClick={onSecondaryButtonContainerClick}
      >
        <div className={styles.button} style={buttonStyle}>
          <div className={styles.buttonText}>{buttonText}</div>
        </div>
      </div>
      <div
        className={styles.secondaryButton1}
        onClick={onSecondaryButtonContainer1Click}
        style={secondaryButton1Style}
      >
        <div className={styles.button} style={button1Style}>
          <div className={styles.buttonText}>{buttonText1}</div>
        </div>
      </div>
    </div>
  );
};

export default CreateSoloSpinnerContainer;
