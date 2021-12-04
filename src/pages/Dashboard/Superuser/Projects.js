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
        <div>
          {/* Navigation */}
          {/* <div>
            <div>
              <p>Ongoing</p>
              <span></span>
            </div>
            <div>
              <p>Past</p>
              <span></span>
            </div>
            <div>
              <p>Archived</p>
              <span></span>
            </div>
            <div>
              <p>All</p>
              <span></span>
            </div>
          </div> */}

          {/* Create project button */}
          <div>
            {/* <Icon icon="gridicons:create" />
            <p>Create Project</p> */}
          </div>
        </div>
      </div>

      {/* Important Details, Deadlines */}
      <div></div>
    </div>
  );
}
