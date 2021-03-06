/** Library imports **/
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";

/** Custom functions **/
import { superuserSidebarItems } from "../../../../../components/Sidebar/sidebarItems";
import { setSidebarItems,setTopBarVisibility } from "../../../../../redux/reducers/shReducers";
import { createLocalUrl } from "../../../../../helpers/helpers";

/** Styles and assets **/
import styles from "./styles/SuperUserBills.module.scss";
import testBill from "../../../../../assets/testBill.pdf";

export default function SuperUserBills() {
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("All Bills");
  const [bills, setBills] = useState([]);
  const billFilterRef = useRef(null);
  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "Bills", items: superuserSidebarItems })
    );
    dispatch(setTopBarVisibility({ visibility: true }));
  }, []);

  useEffect(() => {

      const handleClickOutisde = (event) => {
        if (billFilterRef.current && !billFilterRef.current.contains(event.target)) {
            setShowFilter(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutisde);

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
        const file = new Blob([oReq.response], { type: 'application/pdf' });
        const url = createLocalUrl(file);
        console.log(url)
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
        ]

        bills.map((bill) => {
            bill["bill_url"] = url;
        })

        setBills(bills);
    }

    oReq.send();

    /*
     * In reality it will just be 
     * const url = createLocalUrl(file);
     * as file will be stored as blob in the database
     */
  },[])

  const handleDropdownClick = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>All Bills</h1>

        <div className={styles.filter_wrapper} ref={billFilterRef}>
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
          {bills.length !== 0 ? bills.map((bill) => (
            <div className={styles.bill}>
              <div className={styles.bill_info}>
                <h2>Bill 99</h2>
                <p>Sep 5 9:30</p>
              </div>
              <div className={styles.bill_button}>
                  <a id={styles.view} href={bill.bill_url} target="_blank" >
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
          )): <h5>No Bills</h5>}
        </div>
      </div>
    </div>
  );
}
