import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddFriends.module.css";
const AddFriends: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/spin-home-page1");
  }, [navigate]);

  const onAddContainerClick = useCallback(() => {
    navigate("/create-spinner");
  }, [navigate]);

  const onSecondaryButtonContainerClick = useCallback(() => {
    navigate("/name-spinner");
  }, [navigate]);

  return (
    <div className={styles.addFriends}>
      <div className={styles.blankFrame}>
        <div className={styles.headerParent}>
          <div className={styles.header}>
            <img
              className={styles.generalmenuIcon}
              alt=""
              src="/generalmenu1.svg"
            />
          </div>
          <div className={styles.friendList}>Friend List</div>
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
                    <div className={styles.removeText}>Stacy</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button11.svg"
                    />
                  </div>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>John</div>
                    <img
                      className={styles.removeButtonIcon}
                      alt=""
                      src="/remove-button.svg"
                    />
                  </div>
                </div>
                <div className={styles.removeButtonRow1}>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>Soy</div>
                    <img
                      className={styles.removeButtonIcon2}
                      alt=""
                      src="/remove-button11.svg"
                    />
                  </div>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>Shellfish</div>
                    <img
                      className={styles.removeButtonIcon2}
                      alt=""
                      src="/remove-button.svg"
                    />
                  </div>
                </div>
                <div className={styles.removeButtonRow1}>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>An Item</div>
                    <img
                      className={styles.removeButtonIcon2}
                      alt=""
                      src="/remove-button11.svg"
                    />
                  </div>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>An Item</div>
                    <img
                      className={styles.removeButtonIcon2}
                      alt=""
                      src="/remove-button.svg"
                    />
                  </div>
                </div>
                <div className={styles.removeButtonRow1}>
                  <div className={styles.removeItem}>
                    <div className={styles.removeText}>An Item</div>
                    <img
                      className={styles.removeButtonIcon2}
                      alt=""
                      src="/remove-button11.svg"
                    />
                  </div>
                  <div className={styles.removeItem7}>
                    <div className={styles.removeText}>An Item</div>
                    <img
                      className={styles.removeButtonIcon2}
                      alt=""
                      src="/remove-button.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.sectionAdderChild} />
              <div className={styles.removeMenu}>
                <div className={styles.menuTitle}>People you may know:</div>
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
                          <div className={styles.buttonText}>James</div>
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
                          <div className={styles.buttonText}>Karen</div>
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
                          <div className={styles.buttonText}>Tanner</div>
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
                          <div className={styles.buttonText}>Phil</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.addItemGroup}>
                    <div className={styles.addItem}>
                      <div className={styles.selectionAdderButton4}>
                        <div className={styles.button1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Phil</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.addItem5}>
                      <div className={styles.selectionAdderButton}>
                        <div className={styles.button1}>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="/vector.svg"
                          />
                          <div className={styles.buttonText}>Phil</div>
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
                    <div className={styles.addItem5}>
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
                    <div className={styles.addItem5}>
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
          </div>
        </div>
        <div className={styles.navigationBar}>
          <div className={styles.footer}>
            <div className={styles.navMenu}>
              <div className={styles.navMenuChild} />
              <div className={styles.navMenu1}>
                <div className={styles.home} onClick={onHomeContainerClick}>
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
                <div className={styles.profile}>
                  <img
                    className={styles.profileChild}
                    alt=""
                    src="/group-23.svg"
                  />
                  <div className={styles.label}>Profile</div>
                  <div className={styles.badgeWrapper}>
                    <div className={styles.badge}>
                      <div className={styles.placeholder} />
                    </div>
                  </div>
                </div>
                <div className={styles.profile}>
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
                <div className={styles.profile}>
                  <img
                    className={styles.friendsChild}
                    alt=""
                    src="/group-21.svg"
                  />
                  <div className={styles.label}>Friends</div>
                  <div className={styles.badgeWrapper}>
                    <div className={styles.badge}>
                      <div className={styles.placeholder} />
                    </div>
                  </div>
                </div>
                <div className={styles.add} onClick={onAddContainerClick}>
                  <div className={styles.button13}>
                    <img
                      className={styles.tipsplusIcon}
                      alt=""
                      src="/tipsplus2.svg"
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
              <img className={styles.frameChild} alt="" src="/ellipse-22.svg" />
              <img className={styles.frameItem} alt="" src="/ellipse-12.svg" />
              <div className={styles.spin}>SPIN</div>
            </div>
            <img
              className={styles.spinButtonChild}
              alt=""
              src="/group-123.svg"
            />
          </div>
        </div>
        <div
          className={styles.secondaryButton}
          onClick={onSecondaryButtonContainerClick}
        >
          <div className={styles.button14}>
            <div className={styles.buttonText12}>Create Group Spinner</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFriends;
