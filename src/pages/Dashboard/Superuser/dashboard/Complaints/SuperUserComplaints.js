import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { superuserSidebarItems } from "../../../../../components/Sidebar/sidebarItems";
import {
  setSidebarItems,
  setTopBarVisibility,
} from "../../../../../redux/reducers/shReducers";
import styles from "./styles/SuperUserComplaints.module.scss";
import Select from "react-select";
import SendersImg from "../../../../../assets/images/SendersImg.png";
import complaint_img from "../../../../../assets/images/complaint_img.png";

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
  const [showMessageDetails, setShowMessageDetails] = useState();

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
    dispatch(setTopBarVisibility({ visibility: true }));
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
        showMessageDetails ? (
          <ComplaintDetails setShowMessageDetails={setShowMessageDetails} />
        ) : (
          <Inbox setShowMessageDetails={setShowMessageDetails} />
        )
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

const Inbox = ({ setShowMessageDetails }) => {
  return (
    <div className={styles.content}>
      <h2>All Complaints</h2>
      <div className={styles.inbox_messages}>
        <div className={styles.list}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
              <div className={styles.message_block} onClick={() => setShowMessageDetails(true)}  >
              <div className={styles.sender_img}>
                <img src={SendersImg} />
              </div>
              <div className={styles.message_details}>
                <strong>Sairaj Kapdi</strong>
                <div id={styles.unopened}></div>
                <p id={styles.description}>Bad material used for foundation</p>
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
                <p id={styles.description}>Bad material used for foundation</p>
                <p>11 Aug 2021</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ComplaintDetails = ({setShowMessageDetails}) => {
    const [attachments, setAttachments] = useState([complaint_img, complaint_img, complaint_img]);
    return ( 
        <div className={styles.content}>
            <div className={styles.title}>
                <div className={styles.back_button} onClick={() => setShowMessageDetails(false)}  >
                    <Icon icon="eva:arrow-ios-back-fill" height="20" />
                </div>
                <h2>Bad material used for foundation</h2>
            </div>
            <div className={styles.message_heading}>
                <div className={styles.user_details}>
                    <div className={styles.sender_img}>
                        <img src={SendersImg} />
                    </div>
                    <div className={styles.details} >
                        <strong>Sanket Marathe</strong>
                        <p>Client</p>
                        <p>sanketmarathe69@gmail.com</p>
                    </div>
                </div>
                <p>11 Aug 2021 12:00 pm</p>
            </div>
            <div className={styles.message_content}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien, ut feugiat sed risus condimentum malesuada. Ut eu sagittis ut mauris diam, nec hac aliquam. Nibh vestibulum eget dignissim ultrices velit nunc etiam. Cursus sed congue lacus diam et elementum commodo, dictumst. Arcu justo, eget enim habitasse. Est quam fringilla amet in malesuada curabitur. Amet, tempus scelerisque sed interdum ut. Lacus felis bibendum purus et. Aliquam cursus faucibus amet, tellus nisi, morbi semper et. Augue pulvinar massa ullamcorper urna. Volutpat id pharetra dolor, diam euismod vitae pharetra pellentesque.</p>

                <div className={styles.attachments}>
                    <div className={styles.heading}>
                        <Icon icon="clarity:attachment-line" id={styles.hook} />
                        <h2>Attachments</h2>
                    </div>
                   {attachments.length === 0 ? ( 
                        <p>No attachments</p> ) : ( 
                            <div className={styles.attachments_list}>
                                {
                                    attachments.map(image => (
                                        <img src={image} />
                                    ))
                                }
                            </div> 
                        )
                   }
                </div>
            </div>
            <button id={styles.mark_as_done}> Mark as done </button>
        </div>
    );
};
