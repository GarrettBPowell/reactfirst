import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SpinnerContainer.module.css";

type SpinnerContainerType = {
  spinWheelBackground?: string;
  polygon1?: string;
  ellipse4?: string;
  ellipse5?: string;
  generalpen?: string;

  /** Style props */
  pFChangsJustifyContent?: Property.JustifyContent;
  pFChangsHeight?: Property.Height;
  pFChangsFlexShrink?: Property.FlexShrink;
};

const SpinnerContainer: FunctionComponent<SpinnerContainerType> = ({
  spinWheelBackground,
  polygon1,
  ellipse4,
  ellipse5,
  generalpen,
  pFChangsJustifyContent,
  pFChangsHeight,
  pFChangsFlexShrink,
}) => {
  const spinnerStyle: CSS.Properties = useMemo(() => {
    return {
      justifyContent: pFChangsJustifyContent,
      height: pFChangsHeight,
      flexShrink: pFChangsFlexShrink,
    };
  }, [pFChangsJustifyContent, pFChangsHeight, pFChangsFlexShrink]);

  return (
    <div className={styles.spinnerAndEdit}>
      <div className={styles.spinner} style={spinnerStyle}>
        <div className={styles.spinner1}>
          <img
            className={styles.spinwheelbackgroundIcon}
            alt=""
            src={spinWheelBackground}
          />
          <button className={styles.spincenter}>
            <img className={styles.spincenterChild} alt="" src={polygon1} />
            <img className={styles.spincenterItem} alt="" src={ellipse4} />
            <img className={styles.spincenterInner} alt="" src={ellipse5} />
            <div className={styles.spin}>SPIN</div>
          </button>
          <div className={styles.resturants}>
            <div className={styles.pfChangs}>
              <span className={styles.pfChangsTxtContainer}>
                <p className={styles.pf}>PF</p>
                <p className={styles.pf}>Changs</p>
              </span>
            </div>
            <div className={styles.chipotle}>Chipotle</div>
            <div className={styles.mooyah}>Mooyah</div>
            <div className={styles.rollShack}>Roll Shack</div>
            <div className={styles.theFlippingEgg}>Flipping Egg</div>
            <div className={styles.redRobin}>Red Robin</div>
          </div>
        </div>
      </div>
      <button className={styles.editButton}>
        <button className={styles.button}>
          <img className={styles.generalpenIcon} alt="" src={generalpen} />
          <div className={styles.edit}>Edit</div>
        </button>
      </button>
    </div>
  );
};

export default SpinnerContainer;
