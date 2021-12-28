import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../../../../../components/SearchBar/SearchBar";
import { superuserSidebarItems } from "../../../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../../../redux/reducers/shReducers";
import styles from "./styles/SuperUserArchitect.module.scss";
import plan from "../../../../../assets/images/plan.png";
import Popup from "../../../../../components/Popup/Popup";

export default function SuperUserArchitect() {
  // State variables
  const [navigation, setNavigation] = useState([
    { item_name: "All", style: "all", checked: true },
    { item_name: "Archived", style: "archived", checked: false },
  ]);
  const [overlay, setOverlay] = useState(false);
  const [currentThreeDotMenu, setCurrentThreeDotMenu] = useState(false);
  const [currentPopup, setCurrentPopup] = useState("PlanView");
  const [popupOn, setPopup] = useState(false);
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

  const handlePopupToggle = (cPopup) => {
    const popup = document.getElementById("popup");
    setPopup(!popupOn);
    setCurrentPopup(cPopup);

    if (!popupOn) {
      popup.style.opacity = "1";
      popup.style.visibility = "visible";
    } else {
      popup.style.opacity = "0";
      popup.style.visibility = "hidden";
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

      {currentPopup === "PlanView" ? (
        <Popup
          Component={PlanView}
          handlePopupToggle={handlePopupToggle}
          popupName={"PlanView"}
        />
      ) : currentPopup === "Upload" ? (
        <Popup
          Component={Upload}
          handlePopupToggle={handlePopupToggle}
          popupName={"Upload"}
        />
      ) : (
        ""
      )}

      <button
        className={styles.upload_btn}
        onClick={() => handlePopupToggle("Upload")}
      >
        Upload
      </button>

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
            <Plan
              planNumber={index}
              handleThreeDotMenu={handleThreeDotMenu}
              handlePopupToggle={handlePopupToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Plan = ({ planNumber, handleThreeDotMenu, handlePopupToggle }) => {
  return (
    <div className={styles.plan}>
      <div
        className={styles.plan_img}
        onClick={() => handlePopupToggle("PlanView")}
      >
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

const PlanView = ({ handlePopupToggle }) => {
  return (
    <div className={styles.popup_container}>
      <div className={styles.title}>
        <h2>Upload Plan</h2>
        <span
          className={styles.close}
          onClick={() => handlePopupToggle("PlanView")}
        >
          <Icon icon="ci:off-close" />
        </span>
      </div>
    </div>
  );
};

const Upload = ({ handlePopupToggle }) => {
  return (
    <div className={styles.popup_container}>
      <div className={styles.title}>
        <h2>Upload Plan</h2>
        <span
          className={styles.close}
          onClick={() => handlePopupToggle("Upload")}
        >
          <Icon icon="ci:off-close" />
        </span>
      </div>

      <div className={styles.form}>
        <div className={styles.img_upload} >
          <p id={styles.upload_img}>Upload Image</p>
          <p id={styles.tip}>supports .png .jpg .jpeg</p>
          <input type="file" />
        </div>
        <div className={styles.details}>
          <div className={styles.input_block}>
            <label>Title</label>
            <div className={styles.input_field}>
              <input type="text" placeholder="Ground Plan" />
            </div>
          </div>
          <div className={styles.input_block}>
            <label>Comments</label>
            <div className={styles.input_field}>
              <textarea></textarea>
            </div>
          </div>
          <button>Upload</button>
        </div>
      </div>
    </div>
  );
};
