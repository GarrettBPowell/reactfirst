import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NameSpinner1.module.css";
const NameSpinner1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAddItemContainerClick = useCallback(() => {
    navigate("/name-spinner4");
  }, [navigate]);

  return (
    <div className={styles.nameSpinner}>
      <div className={styles.createSpinner}>
        <div className={styles.header}>
          <img
            className={styles.directionarrowRightIcon}
            alt=""
            src="/directionarrowright2.svg"
          />
          <img
            className={styles.generalmenuIcon}
            alt=""
            src="/generalmenu21.svg"
          />
        </div>
      </div>
      <div className={styles.navigationBar}>
        <div className={styles.footer}>
          <div className={styles.navMenu}>
            <div className={styles.navMenuChild} />
            <div className={styles.navMenu1}>
              <div className={styles.home}>
                <img
                  className={styles.interactiveButtonhomeIcon}
                  alt=""
                  src="/interactivebuttonhome2.svg"
                />
                <div className={styles.label}>Home</div>
                <div className={styles.badgeWrapper}>
                  <div className={styles.badge}>
                    <div className={styles.placeholder} />
                  </div>
                </div>
              </div>
              <div className={styles.home}>
                <img
                  className={styles.profileChild}
                  alt=""
                  src="/group-24.svg"
                />
                <div className={styles.label}>Profile</div>
                <div className={styles.badgeWrapper}>
                  <div className={styles.badge}>
                    <div className={styles.placeholder} />
                  </div>
                </div>
              </div>
              <div className={styles.home}>
                <img
                  className={styles.interactiveButtonhomeIcon}
                  alt=""
                  src="/interactivebuttonsearch3.svg"
                />
                <div className={styles.label}>Search</div>
                <div className={styles.badgeWrapper}>
                  <div className={styles.badge}>
                    <div className={styles.placeholder} />
                  </div>
                </div>
              </div>
              <div className={styles.home}>
                <img
                  className={styles.friendsChild}
                  alt=""
                  src="/group-25.svg"
                />
                <div className={styles.label}>Friends</div>
                <div className={styles.badgeWrapper}>
                  <div className={styles.badge}>
                    <div className={styles.placeholder} />
                  </div>
                </div>
              </div>
              <div className={styles.add}>
                <div className={styles.button}>
                  <img
                    className={styles.tipsplusIcon}
                    alt=""
                    src="/tipsplus22.svg"
                  />
                </div>
                <div className={styles.badgeWrapper4}>
                  <div className={styles.badge}>
                    <div className={styles.placeholder} />
                  </div>
                </div>
                <div className={styles.label3}>New</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.spinButton}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src="/ellipse-21.svg" />
            <img className={styles.frameItem} alt="" src="/ellipse-121.svg" />
            <div className={styles.spin}>SPIN</div>
          </div>
          <img className={styles.spinButtonChild} alt="" src="/group-121.svg" />
        </div>
      </div>
      <div className={styles.workSpinner}>Work Spinner</div>
      <div className={styles.secondaryButton}>
        <div className={styles.button1}>
          <div className={styles.buttonText}>Continue</div>
        </div>
      </div>
      <div className={styles.searchBarParent}>
        <div className={styles.searchBar}>
          <div className={styles.button2}>
            <img
              className={styles.interactiveButtonsearchIcon1}
              alt=""
              src="/interactivebuttonsearch1.svg"
            />
            <div className={styles.search}>Search</div>
          </div>
        </div>
        <div className={styles.sectionAdder}>
          <div className={styles.removeMenu}>
            <div className={styles.removeButtonRow}>
              <div className={styles.removeItem}>
                <div className={styles.removeText}>Stacy</div>
                <img
                  className={styles.removeButtonIcon}
                  alt=""
                  src="/remove-button4.svg"
                />
              </div>
              <div className={styles.removeItem1}>
                <div className={styles.removeText}>John</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button4.svg"
                />
              </div>
            </div>
            <div className={styles.removeButtonRow1}>
              <div className={styles.removeItem}>
                <div className={styles.removeText}>Soy</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button4.svg"
                />
              </div>
              <div className={styles.removeItem}>
                <div className={styles.removeText}>Shellfish</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button4.svg"
                />
              </div>
            </div>
            <div className={styles.removeButtonRow1}>
              <div className={styles.removeItem}>
                <div className={styles.removeText}>An Item</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button4.svg"
                />
              </div>
              <div className={styles.removeItem}>
                <div className={styles.removeText}>An Item</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button4.svg"
                />
              </div>
            </div>
            <div className={styles.removeButtonRow1}>
              <div className={styles.removeItem}>
                <div className={styles.removeText}>An Item</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button4.svg"
                />
              </div>
              <div className={styles.removeItem1}>
                <div className={styles.removeText}>An Item</div>
                <img
                  className={styles.removeButtonIcon1}
                  alt=""
                  src="/remove-button4.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.sectionAdderChild} />
          <div className={styles.removeMenu}>
            <div className={styles.menuTitle}>Add Friends to Spinner</div>
            <div className={styles.frameParent}>
              <div className={styles.addItemParent}>
                <div
                  className={styles.addItem}
                  onClick={onAddItemContainerClick}
                >
                  <div className={styles.selectionAdderButton}>
                    <div className={styles.button3}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                      <div className={styles.buttonText1}>John</div>
                    </div>
                  </div>
                </div>
                <div className={styles.addItem1}>
                  <div className={styles.selectionAdderButton}>
                    <div className={styles.button3}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                      <div className={styles.buttonText1}>John</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.addItemGroup}>
                <div className={styles.addItem2}>
                  <div className={styles.selectionAdderButton}>
                    <div className={styles.button3}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                      <div className={styles.buttonText1}>Tanner</div>
                    </div>
                  </div>
                </div>
                <div className={styles.addItem2}>
                  <div className={styles.selectionAdderButton}>
                    <div className={styles.button3}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                      <div className={styles.buttonText1}>Phil</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.addItemContainer}>
                <div className={styles.addItem2}>
                  <div className={styles.selectionAdderButton4}>
                    <div className={styles.button3}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                      <div className={styles.buttonText1}>Phil</div>
                    </div>
                  </div>
                </div>
                <div className={styles.addItem1}>
                  <div className={styles.selectionAdderButton}>
                    <div className={styles.button3}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                      <div className={styles.buttonText1}>Phil</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.addItemGroup}>
                <div className={styles.addItem2}>
                  <div className={styles.selectionAdderButton}>
                    <div className={styles.button3}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                      <div className={styles.buttonText1}>Sesame</div>
                    </div>
                  </div>
                </div>
                <div className={styles.addItem1}>
                  <div className={styles.selectionAdderButton}>
                    <button className={styles.button10}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                      <div className={styles.buttonText8}>Sesame</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.addItemParent1}>
                <div className={styles.addItem2}>
                  <div className={styles.selectionAdderButton}>
                    <div className={styles.button3}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                      <div className={styles.buttonText1}>Sesame</div>
                    </div>
                  </div>
                </div>
                <div className={styles.addItem1}>
                  <div className={styles.selectionAdderButton}>
                    <div className={styles.button3}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                      <div className={styles.buttonText1}>Sesame</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.addItemParent1}>
                <div className={styles.addItem2}>
                  <div className={styles.selectionAdderButton}>
                    <div className={styles.button3}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                      <div className={styles.buttonText1}>A name in here</div>
                    </div>
                  </div>
                </div>
                <div className={styles.addItem2}>
                  <div className={styles.selectionAdderButton}>
                    <div className={styles.button3}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                      <div className={styles.buttonText1}>A name in here</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameSpinner1;
