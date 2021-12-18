import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  superuserHomeSidebarItems,
  superuserHomeSidebarItemsMobile,
} from "../../../../components/Sidebar/sidebarItems";
import {
  setSidebarItems,
  setTopBarVisibility,
} from "../../../../redux/reducers/shReducers";
import styles from "./styles/projects.module.scss";
import { Icon } from "@iconify/react";
import card_design from "../../../../assets/svg/card_design.svg";

export default function Projects() {
  // Top Bar Visibility (We don't need top bar for this page).
  const dispatch = useDispatch();
  dispatch(setTopBarVisibility({ visibility: false }));

  // State variables
  const [navigation, setNavigation] = useState([
    { item_name: "Ongoing", style: "ongoing", checked: true },
    { item_name: "Past", style: "past", checked: false },
    { item_name: "Archived", style: "archived", checked: false },
    { item_name: "All", style: "all", checked: false },
  ]);
  const [filterDropdown, setDropdown] = useState(false);
  const [filter, setFilter] = useState("Ongoing");
  const [overlay, setOverlay] = useState(false);
  const [currentMenu3Dot, setCurrentMenu3Dot] = useState("");
  const [deadline, setDeadlineFilter] = useState("Approaching Deadlines");
  const [sidebar, setSidebar] = useState({
    visibility: true,
    right: "0px",
  });

  // Sets sidebar navigations
  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "Projects", items: superuserHomeSidebarItems })
    );

    window.matchMedia("(min-width: 1490px)").addEventListener("change", () => {
      setSidebar({ visibility: true, right: "0px" });
    });

    window.matchMedia("(min-width: 900px)").addEventListener("change", () => {
      setSidebar({ visibility: true, right: "0px" });
      dispatch(
        setSidebarItems({
          active: "Projects",
          items: superuserHomeSidebarItems,
        })
      );
    });

    window.matchMedia("(max-width: 810px)").addEventListener("change", () => {
      dispatch(
        setSidebarItems({
          active: "Projects",
          items: superuserHomeSidebarItemsMobile,
        })
      );
    });
  }, []);

  // Three dot menu handler
  const handleThreeDotMenu = (id) => {
    const menu = document.getElementById(id);
    const oldMenu = document.getElementById(currentMenu3Dot);

    if (oldMenu !== menu) {
      if (oldMenu) {
        oldMenu.style.display = "none";
      }
    }

    if (menu) {
      setCurrentMenu3Dot(id);
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

  const handleSidebarToggle = () => {
    if (sidebar.visibility) {
      setSidebar({ visibility: false, right: "-400px" });
    } else if (!sidebar.visibility) {
      setSidebar({ visibility: true, right: "0px" });
    }
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className={styles.container}>
      {overlay ? (
        <span
          className={styles.overlay}
          onClick={() => handleThreeDotMenu(currentMenu3Dot)}
        ></span>
      ) : (
        ""
      )}
      {/* Project list */}
      <div className={styles.list}>
        {/* Project list search panel */}
        <div className={styles.search}>
          <h1>Projects</h1>

          {/* Search Bar */}
          <div className={styles.search_bar}>
            <Icon icon="fe:search" style={{ fontSize: "20px" }} />
            <input type="text" placeholder="Search" />
          </div>

          <input
            type="checkbox"
            className={styles.sidebar_toggle}
            onClick={handleSidebarToggle}
          />

          <div className={styles.sidebar_btn}>
            <Icon
              icon="octicon:sidebar-expand-16"
              className={styles.sidebar_btn_icon}
            />
          </div>
        </div>

        {/* Project list filter panel */}
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

          {/* Filter drop-down for mobile */}
          <div
            className={styles.filter_dropdown_wrapper}
            name="filter_dropdown"
          >
            <div
              className={styles.filter_dropdown}
              onClick={() => {
                setDropdown(!filterDropdown);
              }}
            >
              <Icon
                icon="bx:bx-filter-alt"
                style={{ fontSize: "25px", color: "#232323" }}
              />
              <p>{filter}</p>
              <Icon
                icon="ls:dropdown"
                style={{ fontSize: "15px", color: "#232323" }}
              />
            </div>
            {filterDropdown ? (
              <span name="dropdown">
                {["Ongoing", "Past", "Archived", "All"].map((item) => (
                  <button
                    onClick={() => {
                      setFilter(item);
                      setDropdown(!filterDropdown);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </span>
            ) : (
              ""
            )}
          </div>

          {/* Create project button */}
          <div className={styles.create_project} title="Create New Project">
            <Icon icon="gridicons:create" style={{ fontSize: "25px" }} />
            <p>Create Project</p>
          </div>
        </div>

        <div className={styles.project_list}>
          {[
            {
              projectName: "Project 1",
              start_date: ["Start Date", "32/10/2021"],
              expected_date: ["Expected Date", "09/04/2022"],
              total_budget: ["Total Budget", "₹69,000,000"],
              budget_spent: ["Budget Spent", "₹69,000,000"],
            },
            {
              projectName: "Project 2",
              start_date: ["Start Date", "32/10/2021"],
              expected_date: ["Expected Date", "09/04/2022"],
              total_budget: ["Total Budget", "₹99,000,000"],
              budget_spent: ["Budget Spent", "₹49,000,000"],
            },
            {
              projectName: "Project 3",
              start_date: ["Start Date", "32/10/2021"],
              expected_date: ["Expected Date", "09/04/2022"],
              total_budget: ["Total Budget", "₹29,000,000"],
              budget_spent: ["Budget Spent", "₹19,000,000"],
            },
          ].map((project, projectNumber) => (
            <Project
              project={project}
              projectNumber={projectNumber}
              handleThreeDotMenu={handleThreeDotMenu}
              // handleInfoButton={handleInfoButton}
            />
          ))}
        </div>
      </div>

      {/* Important Details, Deadlines */}
      <div
        className={styles.deadlines}
        id="deadlines"
        style={{ right: sidebar.right }}
      >
        {/* Active Project Count */}
        <div className={styles.active_project_count}>
          <h1>30</h1>
          <p>Total Active Projects</p>
          <span>
            <img src={card_design} />
          </span>
        </div>

        {/* Deadlines list */}
        <div className={styles.deadline_list}>
          {/* Filter button */}
          <div className={styles.deadline_filter_wrapper}>
            <label>
              <input type="checkbox" id="cb" />
              <div className={styles.deadline_filter_btn}>
                <p>{deadline}</p>
                <Icon icon="ls:dropdown" />
              </div>
              <span className={styles.deadline_filter_dd}>
                <button
                  onClick={() => {
                    document.getElementById("cb").checked = false;
                    setDeadlineFilter("Approaching Deadlines");
                  }}
                >
                  Approaching Deadlines
                </button>
                <button
                  onClick={() => {
                    document.getElementById("cb").checked = false;
                    setDeadlineFilter("Missed Deadlines");
                  }}
                >
                  Missed Deadlines
                </button>
              </span>
            </label>
          </div>

          {/* Deadline project list */}
          <div className={styles.deadline_projects}>
            {[
              1, 2, 321, 32, 1432, 4, 324, 3, 24, 32, 4, 32, 432, 432, 4, 324,
              32, 4,
            ].map(() => (
              <div className={styles.deadlined_project}>
                <h3>Project 1</h3>
                <p>Activity 1 approaching deadline</p>
                <p>20.06.2021</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Project = ({
  project,
  projectNumber,
  handleThreeDotMenu,
  handleInfoButton,
}) => {
  const [moreInfoOn, setMoreInfo] = useState(false);

  return (
    <div className={styles.project}>
      {/* Shows the title of the project */}
      <Link
        to="/super-user"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        <span
          className={styles.click_overlay}
          title={project.projectName}
        ></span>
      </Link>
      <div className={styles.name}>
        <h3 id={styles.name}>{project.projectName}</h3>
      </div>

      <div
        className={styles.button_menu}
        id={styles.info}
        onClick={() => {
          setMoreInfo(!moreInfoOn);
          handleThreeDotMenu(`${projectNumber}info`);
        }}
        title="More info"
      >
        <Icon
          icon="akar-icons:info"
          style={{ fontSize: "19px", cursor: "pointer" }}
        />
        <span
          className={styles.floating_button_menu}
          style={{ height: "fit-content", width: "max-content" }}
          id={`${projectNumber}info`}
        >
          <div
            className={styles.details}
            id={styles.expected_date}
            name="expected_date"
            style={{ display: "grid" }}
          >
            <p>{project.expected_date[0]}</p>
            <p>{project.expected_date[1]}</p>
          </div>

          <div
            className={styles.details}
            id={styles.budget_spent}
            name="budget_spent"
            style={{ display: "grid", marginTop: "10px" }}
          >
            <p>{project.budget_spent[0]}</p>
            <p>{project.budget_spent[1]}</p>
          </div>
        </span>
      </div>

      <div className={styles.details} id={styles.start_date}>
        <p>{project.start_date[0]}</p>
        <p>{project.start_date[1]}</p>
      </div>
      <div className={styles.details} id={styles.expected_date}>
        <p>{project.expected_date[0]}</p>
        <p>{project.expected_date[1]}</p>
      </div>
      <div className={styles.details} id={styles.total_budget}>
        <p>{project.total_budget[0]}</p>
        <p>{project.total_budget[1]}</p>
      </div>
      <div className={styles.details} id={styles.budget_spent}>
        <p>{project.budget_spent[0]}</p>
        <p>{project.budget_spent[1]}</p>
      </div>
      <div
        className={styles.button_menu}
        onClick={() => handleThreeDotMenu(projectNumber)}
      >
        <Icon
          icon="mono-icons:options-vertical"
          style={{ fontSize: "25px", cursor: "pointer" }}
        />
        <span
          className={styles.floating_button_menu}
          id={projectNumber}
          name="three-dot-menu"
        >
          <button onClick={() => alert("edit")}>Edit</button>
          <button>Delete</button>
        </span>
      </div>
      <div className={styles.alert_button} title="Alert! Missed Deadline">
        <Icon
          icon="akar-icons:circle-alert"
          style={{ fontSize: "25px", color: "red" }}
        />
      </div>
    </div>
  );
};
