import React, { useState, useEffect } from "react";
import styles from "./topbar.module.scss";
import { Icon } from "@iconify/react";
import ProfileImg from "../../assets/images/profile.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Topbar() {
    const active_item = useSelector(
        (state) => state.stonehive.sidebarItems.active
    );
    const [showDropdown, setShowDropdown] = useState(true);
    const [showOverlay, setShowOverlay] = useState(false);

    const handleDropdownClick = (component) => {
        const icon = document.getElementById("icon");
        const checkbox = document.getElementsByName("dropdown_checkbox")[0];

        (icon.style.transform === "rotate(0deg)") ? 
            icon.style.transform = "rotate(180deg)" : icon.style.transform = "rotate(0deg)";

        if (component === "overlay") { checkbox.checked = false; }
        setShowDropdown(!showDropdown);
        setShowOverlay(!showOverlay);
    }
    return (
        <div className={`${styles.container} responsive_font`}>
            {showOverlay ? (
                <span
                    className={styles.container_overlay}
                    onClick={() => handleDropdownClick("overlay")}
                ></span>
            ) : (
                ""
            )}
            <div className={styles.headings}>
                <div className={styles.headings_col}>
                    <h2>{active_item}</h2>
                    <h5>
                        Welcome back sairaj
                        <Icon
                            icon="emojione:waving-hand-medium-light-skin-tone"
                            height="20"
                        />
                    </h5>
                </div>
            </div>
            <div className={styles.user_profile_notifi}>
                <Icon icon="ic:baseline-circle-notifications" width="30px" />
                <div className={styles.seperator}></div>
                <div className={styles.profile}>
                    <img src={ProfileImg} alt="prifle" />
                </div>
                <div className={styles.dropdown_container}>
                    <input type="checkbox" id={styles.dropdown_checkbox} 
                           name="dropdown_checkbox"
                           onClick={handleDropdownClick}
                    />
                    <div className={styles.dropdown_icon} onClick={handleDropdownClick} >
                        <Icon icon="ls:dropdown" width="20px" id="icon" className={styles.icon} />
                    </div>
                    <ProfileDropDown showOverlay={showOverlay} handleDropdownClick={handleDropdownClick} />
                </div>
            </div>
        </div>
    );
}

const ProfileDropDown = ({showOverlay,handleDropdownClick}) => {
    return (
        <div className={styles.dropdown} id={styles.dropdown} >
            <div className={styles.name}>
                <p>Signed in as</p>
                <p>Sairaj Kapdi</p>
            </div>
            <div className={styles.navs}>
                <div className={styles.item}>
                    <Icon icon="ci:settings-filled" />
                    <Link to="/client/settings" >Settings</Link>
                </div>
                <div className={styles.item}>
                    <Icon icon="ri:logout-circle-r-fill" />
                    <Link to="/client/settings" >Logout</Link>
                </div>
            </div>
        </div>
    )
}
