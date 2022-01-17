import React, {useEffect} from "react";
import { useDispatch } from "react-redux";

import styles from "./styles/ProjectCreated.module.scss";
import success_vector from "../../../../assets/images/success_vector.png"

/** Custom functions **/
import {
  setSidebarItems,
  setTopBarVisibility,
} from "../../../../redux/reducers/shReducers";

import {
  superuserHomeSidebarItems,
  superuserHomeSidebarItemsMobile,
} from "../../../../components/Sidebar/sidebarItems";

const ProjectCreated = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setTopBarVisibility({visibility: false}));

        // set sidebar navs.
        dispatch(
            setSidebarItems({ active: "Projects", items: superuserHomeSidebarItems })
        );

        window.matchMedia("(min-width: 900px)").addEventListener("change", () => {
            dispatch(
                setSidebarItems({
                    active: "Projects",
                    items: superuserHomeSidebarItems,
                })
            );
        });

        if (window.innerWidth <= 810) {
            dispatch(
                setSidebarItems({
                    active: "Projects",
                    items: superuserHomeSidebarItemsMobile,
                })
            );
        }

        window.matchMedia("(max-width: 810px)").addEventListener("change", () => {
            dispatch(
                setSidebarItems({
                    active: "Projects",
                    items: superuserHomeSidebarItemsMobile,
                })
            );
        });


    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.success_vector}>
                <img src={success_vector} />
                <h1>Project Created!</h1>
                <p>Dashboard Login credentials has been mailed to client.</p>
            </div>
        </div>
    )
}

export default ProjectCreated
