import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Resturants.module.css";
const Resturants: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainer1Click = useCallback(() => {
    navigate("/resturants-add-1");
  }, [navigate]);

  return (
    <div className={styles.resturants}>
      <div className={styles.blankFrame}>
        <div className={styles.headerParent}>
          <div className={styles.header}>
            <img
              className={styles.generalmenuIcon}
              alt=""
              src="/generalmenu41.svg"
            />
          </div>
          <div className={styles.addRestaurants}>
            <p className={styles.add}>{`Add `}</p>
            <p className={styles.add}>Restaurants</p>
          </div>
          <div className={styles.searchBarParent}>
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
            <div className={styles.sectionAdder}>
              <div className={styles.removeMenu}>
                <div className={styles.removeButtonRow}>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>Chipotle</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>PF Changs</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                </div>
                <div className={styles.removeButtonRow}>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}> Mooyah</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>Roll Shack</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                </div>
                <div className={styles.removeButtonRow}>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>Flipping Egg</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>Red Robin</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                </div>
                <div className={styles.removeButtonRow3}>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>An Item</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                  <div className={styles.removeItem7}>
                    <div className={styles.removeText}>An Item</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.sectionAdderChild} />
              <div className={styles.addMenu}>
                <div className={styles.menuTitle}>Select Restaurants:</div>
                <div className={styles.frameParent}>
                  <div className={styles.addItemParent}>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div
                          className={styles.button1}
                          onClick={onButtonContainer1Click}
                        >
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Chipotle</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button2}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>PF Changs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.addItemGroup}>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button2}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Mooyah</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button2}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Roll Shack</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.addItemGroup}>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button2}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Flipping Egg</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button2}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Red Robin</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.addItemGroup}>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button2}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Twisted Root</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <button className={styles.button8}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText7}>Phoenix Pho</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.addItemParent}>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button2}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Chick-fil-a</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button2}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Wendy’s</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.addItemParent}>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button2}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Panda Express</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button2}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Mian Bistro</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.secondaryButton}>
              <div className={styles.button13}>
                <div className={styles.buttonText12}>Continue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resturants;
