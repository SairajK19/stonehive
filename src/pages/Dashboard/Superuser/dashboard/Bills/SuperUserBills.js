import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { superuserSidebarItems } from "../../../../../components/Sidebar/sidebarItems";
import { setSidebarItems,setTopBarVisibility } from "../../../../../redux/reducers/shReducers";
import styles from "./styles/SuperUserBills.module.scss";

export default function SuperUserBills() {
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [filter, setFilter] = useState("All Bills");
  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "Bills", items: superuserSidebarItems })
    );
    dispatch(setTopBarVisibility({ visibility: true }));
  }, []);

  const handleOverlayClick = () => {
    setShowFilter(!showFilter);
    setShowOverlay(!showOverlay);
  };

  const handleDropdownClick = () => {
    setShowFilter(!showFilter);
    setShowOverlay(!showOverlay);
  };

  return (
    <div className={styles.container}>
        {/** 
            This is created so that once a user clicks on a pop-up 
             if the user clicks anywhere else the popup will be closed.
        **/}
      {showOverlay ? (
        <span
          className={styles.container_overlay}
          onClick={handleOverlayClick}
        ></span>
      ) : (
        ""
      )}
      <div className={styles.title}>
        <h1>All Bills</h1>

        <div className={styles.filter_wrapper}>
          <div className={styles.current_filter} onClick={handleDropdownClick}>
            <Icon icon="ls:dropdown" />
            <p>{filter}</p>
          </div>
          {showFilter ? (
            <div
              className={styles.filter_options}
              onClick={handleDropdownClick}
            >
              <p onClick={() => setFilter("All Bills")}>All Bills</p>
              <p onClick={() => setFilter("Old Bills")}>Old Bills</p>
              <p onClick={() => setFilter("Approved")}>Approved</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={styles.bills}>
        <div className={styles.list}>
          {[
            { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
            { bill_label: "Bill 99", date_time: "Sep 05 9:30", approved: true },
            { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
            { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
            { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
            { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
            { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
            { bill_label: "Bill 99", date_time: "Sep 05 9:30" },
          ].map((bill) => (
            <div className={styles.bill}>
              <div className={styles.bill_info}>
                <h2>Bill 99</h2>
                <p>Sep 5 9:30</p>
              </div>
              <div className={styles.bill_button}>
                  <a id={styles.view}>
                      {/* Here once we receive the bill object file, we need to create a local url using
                        URL.createObjectURL(), it takes an argument that is the pdf object we get from the database.
                        so the bill can be seen locally.

                        Check
                        https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
                        for more info
                        */}
                      <Icon icon="akar-icons:eye" />
                      View
                  </a>
                  {bill.approved ? (
                      <button id={styles.approved}>Approved</button>
                  ) : (
                      <button id={styles.approve}>Approve</button>
                  )}
                  <button id={styles.reject}>Reject</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
