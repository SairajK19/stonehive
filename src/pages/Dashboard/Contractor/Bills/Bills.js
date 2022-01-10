import React, { useEffect } from "react";
import styles from "./bills.module.scss";
import { useDispatch } from "react-redux";
import { contractorSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../../redux/reducers/shReducers";

import { Icon } from "@iconify/react";

import BillsHeaderSvg from "../../../../assets/svg/bills_header.svg";
export default function Bills() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "bills", items: contractorSidebarItems })
    );
  });
  return (
    <div className={`${styles.container} responsive_font`}>
      <BillMain />
    </div>
  );
}
function NoBills() {
  return (
    <div className={styles.no_bills}>
      <div>
        <img src={BillsHeaderSvg} alt="" />
        <p id={styles.info}>Currently you dont have any bills</p>
        <button className={styles.btn_lg}>Upload Bills</button>
        <p id={styles.note}>Note: upload only .xlxs files</p>
      </div>
    </div>
  );
}
function BillMain() {
  return (
    <div className={styles.bills_main}>
      <div className={styles.bills_header}>
        <div className={styles.header_image}>
          <img src={BillsHeaderSvg} alt="" />
        </div>
        <div className={styles.header_info}>
          <p id={styles.title}>Upload Bills</p>
          <p id={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className={styles.upload_btn}>
          <button className={styles.btn_lg}>upload</button>
        </div>
      </div>
      <div className={styles.bills}>
        <div className={styles.bills_head}>
          <p id={styles.head}>All Bills</p>
          <button>
            <Icon icon="dashicons:arrow-down-alt2" height="20" /> recents
          </button>
        </div>
        <div className={styles.bills_list}>
          {[1, 2, 3].map(() => (
            <BillCard />
          ))}
        </div>
      </div>
    </div>
  );
}
function BillCard() {
  return (
    <div className={styles.bills_item}>
      <div className={styles.bill_info}>
        <p id={styles.bill_title}>Bill 1</p>
        <p id={styles.bill_date}>Sep 5 09:30</p>
      </div>
      <div className={styles.bill_item_btns}>
        <button
          className={styles.btn_sm_icon}
          style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
        >
          <Icon icon="carbon:view" />
        </button>
        <button
          className={styles.btn_sm_icon}
          style={{ backgroundColor: "rgba(89, 97, 249, 1)" }}
        >
          <Icon icon="ion:create-outline" />
        </button>
        <button
          className={styles.btn_sm_icon}
          style={{ backgroundColor: "rgba(225, 41, 41, 1)" }}
        >
          <Icon icon="ant-design:delete-outlined" />
        </button>
      </div>
    </div>
  );
}
