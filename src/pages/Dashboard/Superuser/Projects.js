import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { superuserHomeSidebarItems } from "../../../components/Sidebar/sidebarItems";
import {
  setSidebarItems,
  setTopBarVisibility,
} from "../../../redux/reducers/shReducers";
import styles from "./styles/projects.module.scss";
import { Icon } from "@iconify/react";

export default function Projects() {
  const dispatch = useDispatch();
  dispatch(setTopBarVisibility({ visibility: false }));

  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "Projects", items: superuserHomeSidebarItems })
    );
  }, []);

  return (
    <div className={styles.container}>
      {/* Project list */}
      <div className={styles.list}>
        {/* Project list search panel */}
        <div className={styles.search}>
          <h1>Projects</h1>
          <div className={styles.search_bar}>
            <Icon icon="fe:search" />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        {/* Project list filter panel */}
        <div className={styles.filter}>
          {/* Navigation */}
          <div className={styles.navigation}>
            <div className={styles.filter_item}>
              <label>
                <input
                  type="radio"
                  name="filter-item"
                  id={styles.ongoing}
                  className={styles.filter_item_input}
                  defaultChecked={true}
                />
                <span className={styles.filter_item_text}>Ongoing</span>
                <span className={styles.controlme}></span>
              </label>
            </div>
            <div className={styles.filter_item}>
              <label>
                <input
                  type="radio"
                  name="filter-item"
                  id={styles.past}
                  className={styles.filter_item_input}
                />
                <span className={styles.filter_item_text}>Past</span>
                <span className={styles.controlme}></span>
              </label>
            </div>
            <div className={styles.filter_item}>
              <label>
                <input
                  type="radio"
                  name="filter-item"
                  id={styles.archived}
                  className={styles.filter_item_input}
                />
                <span className={styles.filter_item_text}>Archived</span>
                <span className={styles.controlme}></span>
              </label>
            </div>
            <div className={styles.filter_item}>
              <label>
                <input
                  type="radio"
                  name="filter-item"
                  id={styles.all}
                  className={styles.filter_item_input}
                />
                <span className={styles.filter_item_text}>All</span>
                <span className={styles.controlme}></span>
              </label>
            </div>
          </div>

          {/* Create project button */}
          <div className={styles.create_project}>
            <Icon icon="gridicons:create" />
            <p>Create Project</p>
          </div>
        </div>
      </div>

      {/* Important Details, Deadlines */}
      <div></div>
    </div>
  );
}
