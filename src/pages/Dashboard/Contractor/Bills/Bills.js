import React, { useEffect, useState } from "react";
import styles from "./bills.module.scss";
import { useDispatch } from "react-redux";
import { contractorSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../../redux/reducers/shReducers";
import { createLocalUrl } from "../../../../helpers/helpers";

import { Icon } from "@iconify/react";

import BillsHeaderSvg from "../../../../assets/svg/bills_header.svg";
import testBill from "../../../../assets/testBill.pdf";
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
  const [bills, setBills] = useState([]);

  useEffect(() => {
    /*
     * Code from line 39 to 54 is temperory,
     * since we don't get the file as a blob
     * after importing it I have written this code
     * to get the blob of the pdf using the path.
     */
    const oReq = new XMLHttpRequest();

    oReq.open("GET", testBill, true);

    oReq.responseType = "blob";

    oReq.onload = () => {
      const file = new Blob([oReq.response], { type: "application/pdf" });
      const url = createLocalUrl(file);
      console.log(url);
      // Add the url to bills array.

      var bills = [
        { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
        { bill_label: "Bill 99", date_time: "Sep 05 9:30", approved: true },
        { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
        { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
        { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
        { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
        { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
        { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
      ];

      bills.map((bill) => {
        bill["bill_url"] = url;
      });

      setBills(bills);
    };

    oReq.send();

    /*
     * In reality it will just be
     * const url = createLocalUrl(file);
     * as file will be stored as blob in the database
     */
  }, []);

  return (
    <div className={styles.bills_main}>
      <div className={styles.bills_header}>
        <div className={styles.bills_header_left}>
          {" "}
          <div className={styles.header_image}>
            <img src={BillsHeaderSvg} alt="" />
          </div>
          <div className={styles.header_info}>
            <p id={styles.title}>Upload Bills</p>
            <p id={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
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
        <div className={styles.bills_list} style={{ textAlign: "center" }}>
          {bills.length !== 0 ? (
            bills.map((bill) => <BillCard bill={bill} />)
          ) : (
            <h5>No bills</h5>
          )}
        </div>
      </div>
    </div>
  );
}
function BillCard({ bill }) {
  return (
    <div className={styles.bills_item}>
      <div className={styles.bill_info}>
        <p id={styles.bill_title}>{bill.bill_label}</p>
        <p id={styles.bill_date}>{bill.date_time}</p>
      </div>
      <div className={styles.bill_item_btns}>
        <a
          className={styles.btn_sm_icon}
          style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
          href={bill.bill_url}
          target="_blank"
        >
          <Icon icon="carbon:view" />
        </a>
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
