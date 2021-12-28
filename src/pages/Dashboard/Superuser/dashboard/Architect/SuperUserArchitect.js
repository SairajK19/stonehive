import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../../../../../components/SearchBar/SearchBar";
import { superuserSidebarItems } from "../../../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../../../redux/reducers/shReducers";
import styles from "./styles/SuperUserArchitect.module.scss";
import plan from "../../../../../assets/images/plan.png";

export default function SuperUserArchitect() {
  // State variables
  const [navigation, setNavigation] = useState([
    { item_name: "All", style: "all", checked: true },
    { item_name: "Archived", style: "archived", checked: false },
  ]);
  const [overlay, setOverlay] = useState(false);
  const [currentThreeDotMenu, setCurrentThreeDotMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "Architect", items: superuserSidebarItems })
    );
  }, []);

  const handleThreeDotMenu = (id) => {
    const menu = document.getElementById(id);
    const oldMenu = document.getElementById(currentThreeDotMenu);

    if (menu !== oldMenu) {
      if (oldMenu) {
        oldMenu.style.display = "none";
      }
    }

    if (menu) {
      setCurrentThreeDotMenu(id);
      if (menu.style.display === "") {
        menu.style.display = "grid";
        setOverlay(true);
      } else if (menu.style.display === "grid") {
        menu.style.display = "none";
        setOverlay(false);
      } else if (menu.style.display === "none") {
        menu.style.display = "grid";
        setOverlay(true);
      }
    }
  };

  return (
    <div className={styles.container}>
      {overlay ? (
        <span
          className={styles.overlay}
          onClick={() => handleThreeDotMenu(currentThreeDotMenu)}
        ></span>
      ) : (
        ""
      )}

      <span className={styles.popup} id="popup">
        {/* {currentForm === "Add" ? (
          <AddActivityForm handlePopupToggle={handlePopupToggle} />
        ) : (
          <EditActivityForm handlePopupToggle={handlePopupToggle} />
        )} */}
      </span>

      <button className={styles.upload_btn}>Upload</button>

      <div className={styles.search}>
        <h1>All Uploads</h1>

        {/* Search Bar */}
        <SearchBar />
      </div>

      <div className={styles.filter}>
        {/* Navigation */}
        <div className={styles.navigation}>
          {navigation.map((item) => (
            <div className={styles.filter_item}>
              <label>
                <input
                  type="radio"
                  name="filter-item"
                  id={styles[item.style]}
                  className={styles.filter_item_input}
                  defaultChecked={item.checked}
                />
                <span className={styles.filter_item_text}>
                  {item.item_name}
                </span>
                <span className={styles.controlme}></span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.plans}>
        <div className={styles.list}>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <Plan planNumber={index} handleThreeDotMenu={handleThreeDotMenu} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Plan = ({ planNumber, handleThreeDotMenu }) => {
  return (
    <div className={styles.plan}>
      <div className={styles.plan_img}>
        <img src={plan} />
      </div>
      <div className={styles.plan_options}>
        <h3>Ground floor plan</h3>
        <div
          className={styles.more}
          onClick={() => handleThreeDotMenu(`${planNumber}dropdown`)}
        >
          <Icon
            icon="akar-icons:more-horizontal"
            style={{ fontSize: "25px" }}
          />
          <div className={styles.dropdown} id={`${planNumber}dropdown`}>
            <p onClick={() => alert("deleted")}>Delete</p>
            <p onClick={() => alert("Archived")}>Archive</p>
          </div>
        </div>
        <p>20 august 2021</p>
      </div>
    </div>
  );
};
