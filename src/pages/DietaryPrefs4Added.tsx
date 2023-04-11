import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DietaryPrefs4Added.module.css";

const DietaryPrefs4Added: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAddItemContainer5Click = useCallback(() => {
    navigate("/dietary-prefs-5-added");
  }, [navigate]);

  return (
    <div className={styles.dietaryPrefs4Added}>
      <div className={styles.blankFrame}>
        <div className={styles.headerParent}>
          <div className={styles.header}>
            <img
              className={styles.generalmenuIcon}
              alt=""
              src="/generalmenu4.svg"
            />
          </div>
          <div className={styles.dietaryPreferences}>Dietary Preferences</div>
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
                    <div className={styles.removeText}>Dairy</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>Peanuts</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                </div>
                <div className={styles.removeButtonRow}>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>Soy</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>Shellfish</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                </div>
                <div className={styles.removeButtonRow2}>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>An Item</div>
                    <img
                      className={styles.removeButtonIcon4}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>An Item</div>
                    <img
                      className={styles.removeButtonIcon4}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                </div>
                <div className={styles.removeButtonRow2}>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>An Item</div>
                    <img
                      className={styles.removeButtonIcon4}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                  <div className={styles.removeItem7}>
                    <div className={styles.removeText}>An Item</div>
                    <img
                      className={styles.removeButtonIcon4}
                      alt=""
                      src="/remove-button5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.sectionAdderChild} />
              <div className={styles.removeMenu}>
                <div className={styles.menuTitle}>Select allergies:</div>
                <div className={styles.frameParent}>
                  <div className={styles.addItemParent}>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Mustard</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Tree Nuts</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.addItemGroup}>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Red Meat</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Tomatoes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.addItemGroup}>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Eggs</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.addItem5}
                      onClick={onAddItemContainer5Click}
                    >
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Sesame</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Sesame</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.addItem7}>
                      <div className={styles.selectionAdderButton}>
                        <button className={styles.button8}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText7}>Sesame</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.addItemParent1}>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Sesame</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.addItem7}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Sesame</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.addItemParent1}>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>
                            A name in here
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>
                            A name in here
                          </div>
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

export default DietaryPrefs4Added;
