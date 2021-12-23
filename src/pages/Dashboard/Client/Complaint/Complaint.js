import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSidebarItems } from "../../../../redux/reducers/shReducers";
import { clientSidebarItems } from "../../../../components/Sidebar/sidebarItems";

import styles from "./complaint.module.scss";

import complaint_svg from "../../../../assets/svg/complaint_svg.svg";

export default function Complaint() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "complaint", items: clientSidebarItems })
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.complaint_svg}>
        <img src={complaint_svg} alt="" />
      </div>
      <div className={styles.form_container}>
        <form action="">
          <div className={styles.form_recipient}>
            <label>
              To<span>*</span>
            </label>
            <select name="recipient" id={styles.recipient}>
              <option value="stoneheive">Stone Hive</option>
              <option value="contractor">Contractor</option>
              <option value="architect">Architect</option>
            </select>
          </div>
          <div className={styles.title}>
            <label>
              Complaint Title<span>*</span>
            </label>
            <input type="text" />
            <p>Give your complaint some title</p>
          </div>
          <div className={styles.description}>
            <label>
              Complaint Description <span>*</span>
            </label>
            <textarea name="description" id="desc" rows="5" />
            <p>Describe your issue</p>
          </div>
          <div className={styles.submit_button}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
