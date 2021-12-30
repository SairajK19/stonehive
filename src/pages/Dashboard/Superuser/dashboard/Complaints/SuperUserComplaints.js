import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { superuserSidebarItems } from "../../../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../../../redux/reducers/shReducers";
import styles from "./styles/SuperUserComplaints.module.scss";
import Select from "react-select";
import SendersImg from "../../../../../assets/images/SendersImg.png";

export default function SuperUserComplaints() {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([
    { value: "Contractor", label: "Contractor" },
    { value: "Architect", label: "Architect" },
  ]);
  const [complaint, setComplaint] = useState("#f5f6fa");
  const [inbox, setInbox] = useState("transparent");
  const [sent, setSent] = useState("transparent");
  const [currentNav, setCurrentNav] = useState("Complaint");

  const handleNavigation = (nav) => {
    setCurrentNav(nav);
    if (nav === "Complaint") {
      setComplaint("#f5f6fa");
      setInbox("transparent");
      setSent("transparent");
    } else if (nav === "Inbox") {
      setComplaint("transparent");
      setInbox("#f5f6fa");
      setSent("transparent");
    } else {
      setComplaint("transparent");
      setInbox("transparent");
      setSent("#f5f6fa");
    }
  };

  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "Complaints", items: superuserSidebarItems })
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <div
          className={styles.item}
          onClick={() => handleNavigation("Complaint")}
          style={{ backgroundColor: complaint }}
        >
          <Icon icon="akar-icons:edit" id={styles.icon} />
          <p>Complaint</p>
        </div>
        <div
          className={styles.item}
          onClick={() => handleNavigation("Inbox")}
          style={{ backgroundColor: inbox }}
        >
          <Icon icon="akar-icons:inbox" id={styles.icon} />
          <p>Inbox</p>
        </div>
        <div
          className={styles.item}
          onClick={() => handleNavigation("Sent")}
          style={{ backgroundColor: sent }}
        >
          <Icon icon="akar-icons:send" id={styles.icon} />
          <p>Sent</p>
        </div>
      </div>
      {currentNav === "Complaint" ? (
        <ComplaintForm options={options} />
      ) : currentNav === "Inbox" ? (
        <Inbox />
      ) : currentNav === "Sent" ? (
        <Sent />
      ) : (
        ""
      )}
    </div>
  );
}

const ComplaintForm = ({ options }) => {
  return (
    <div className={styles.content}>
      <h2>Register a complaint</h2>
      <div className={styles.form_container}>
        <form>
          <div className={styles.input_block}>
            <label>To</label>
            <Select
              defaultValue={options[0]}
              // isMulti
              name="Categories"
              options={options}
              className={styles.basic_multi_select}
              classNamePrefix="select"
              //   onChange={publishHandleInputChange}
              // styles={customStyles}
            />
          </div>
          <div className={styles.input_block} id={styles.complaint_title}>
            <label>Complaint Title</label>
            <div className={styles.input_tooltip}>
              <input type="text" />
              <span>Give your complaint some title</span>
            </div>
          </div>
          <div className={styles.input_block}>
            <label>Complaint</label>
            <div className={styles.input_tooltip}>
              <textarea />
              <span>Describe your Issue</span>
            </div>
          </div>
          <div className={styles.input_block}>
            <label>Attach Photographs</label>
            <div className={styles.input_tooltip}>
              <input type="file" />
            </div>
          </div>
        </form>
        <button id={styles.submit}>Submit</button>
      </div>
    </div>
  );
};

const Inbox = () => {
  return (
    <div className={styles.content}>
      <h2>All Complaints</h2>
      <div className={styles.inbox_messages}>
        <div className={styles.list}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <div className={styles.message_block}>
              <div className={styles.sender_img}>
                <img src={SendersImg} />
              </div>
              <div className={styles.message_details}>
                <strong>Sairaj Kapdi</strong>
                <div id={styles.unopened}></div>
                <p id={styles.description} >Bad material used for foundation</p>
                <p>11 Aug 2021</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Sent = () => {
  return (
    <div className={styles.content}>
      <h2>All Complaints</h2>
      <div className={styles.inbox_messages}>
        <div className={styles.list}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <div className={styles.message_block}>
              <div className={styles.sender_img}>
                <img src={SendersImg} />
              </div>
              <div className={styles.message_details}>
                <strong>Sairaj Kapdi</strong>
                <div
                  id={styles.unopened}
                  style={{
                    width: "max-content",
                    height: "max-content",
                    borderRadius: "0px",
                    padding: "5px 15px",
                    color: "#1FB185",
                    backgroundColor: "rgba(31, 177, 133, 0.19)",
                    borderRadius: "8px",
                  }}
                >
                  Solved
                </div>
                <p id={styles.description} >Bad material used for foundation</p>
                <p>11 Aug 2021</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
